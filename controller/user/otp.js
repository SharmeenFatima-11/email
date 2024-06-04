
const mailService = require("../../services/MailService");


const otpController = {
  // ......................send otp .............................
  async sendOTPToEmail(req, res, next) {
    try {
      const { body, to } = req.body;
      if(!body || !to){
        res.status(400).json({
          success: false,
          data: { error: "Please provide body and to 'person to send email ' " },
        });
      }else{
     
          // Send OTP email
          await mailService.sendEmail({
            sender: process.env.EMAIL,
            to: to,
            subject: "Email is",
            html: body,
            attachments: [],
          });

          res.status(200).json({
            success: true,
            data: { message: "Mail Sent Successfully!" },
          });
        }
    } catch (error) {
      res.status(400).json({
        success: false,
        data: { error: error.message },
      });
    }
  },
};

module.exports = otpController;
