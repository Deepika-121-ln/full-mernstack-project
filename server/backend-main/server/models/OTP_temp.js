const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { otpTemplate } = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60, // OTP expires in 5 minutes
    },
});

// Function to send email
async function sendVerificationEmail(email, otp) {
    try {
        const otpHtml = otpTemplate(otp);  // Generate the HTML template with OTP
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", otpHtml);
        console.log("Email Sent Successfully", mailResponse);
    } catch (error) {
        console.log("Error occurred while sending email: ", error);
        throw error;
    }
}

OTPSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
});

module.exports = {
    sendVerificationEmail,   
    OTP: mongoose.model("OTP", OTPSchema)  
};
