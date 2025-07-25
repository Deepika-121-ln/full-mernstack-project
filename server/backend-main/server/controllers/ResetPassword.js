const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// =============================
// Forgot Password - Send Reset Link
// =============================
exports.resetPasswordToken = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not registered with us. Please enter a valid email.`,
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    const updatedDetails = await User.findOneAndUpdate(
      { email },
      {
        token,
        resetPasswordExpires: Date.now() + 3600000, // 1 hour
      },
      { new: true }
    );

    const url = `http://localhost:3000/update-password/${token}`;

    // ✅ Send Reset Email
    try {
      await mailSender(
        email,
        "Password Reset Link",
        `<p>You requested a password reset. Click the link below to set a new password:</p><br>
        <a href="${url}" target="_blank">${url}</a><br>
        <p>This link will expire in 1 hour.</p>`
      );
    } catch (err) {
      console.error("Email sending failed:", err?.response || err?.message || err);
      return res.status(500).json({
        success: false,
        message: "Failed to send password reset email. Please try again.",
      });
    }

    return res.json({
      success: true,
      message: "Email sent successfully. Please check your inbox.",
    });
  } catch (error) {
    console.error("Reset Token Error:", error?.message || error);
    return res.json({
      success: false,
      message: "An error occurred while sending the reset link.",
      error: error.message,
    });
  }
};

// =============================
// Reset Password - Final Step
// =============================
exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Password and Confirm Password do not match.",
      });
    }

    const userDetails = await User.findOne({ token });

    if (!userDetails) {
      return res.json({
        success: false,
        message: "Invalid or expired token.",
      });
    }

    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.status(403).json({
        success: false,
        message: "Token has expired. Please request a new password reset link.",
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    await User.findOneAndUpdate(
      { token },
      {
        password: encryptedPassword,
        token: null,
        resetPasswordExpires: null,
      },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Password reset successful.",
    });
  } catch (error) {
    console.error("Reset Password Error:", error?.message || error);
    return res.json({
      success: false,
      message: "An error occurred while resetting the password.",
      error: error.message,
    });
  }
};
