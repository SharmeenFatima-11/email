const express = require("express");

// routes
const userOtpController = require("../controller/user/otp")

const userRouter = express.Router();

userRouter.post("/sendEmail", userOtpController.sendOTPToEmail);

module.exports = userRouter;
