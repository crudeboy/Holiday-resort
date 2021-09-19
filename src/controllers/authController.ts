import crypto from 'crypto';
import User from '../models/usersModel';
import { Request, Response } from 'express';
// import { HttpError } from 'http-errors';
import jwt from 'jsonwebtoken';
// import config from "config";
// import sendEmail from "../utils/email";
const secret: string = process.env.JWT_SECRET as string;
const days: string = process.env.JWT_EXPIRES_IN as string;
const signToken = (id: string) => {
  return jwt.sign({ id }, secret, {
    expiresIn: days,
  });
};
export async function signup(req: Request, res: Response): Promise<void> {
  try {
    // const newUser = await User.create(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const token = signToken(newUser._id);
    res.cookie('jwt', token, { httpOnly: true });
    res.redirect('/login');
    res.status(201).json({
      token: newUser._id,
    });
    return;
  } catch (err) {
    res.redirect(`/register?message=${err.message}`);
    res.status(400).json({
      message: err.message,
    });
    return;
  }
}
export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;
  //(1) if email and password exist
  if (!email || !password) {
    res.render('login', { message: 'please provide email and password' });
    // res.status(400).json({
    //   status: "fail",
    //   message: "please provide email and password",
    // });
    return;
  }
  //(2) check if user exist && passwod is correct
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    res.render('login', { message: 'Incorrect Email or password' });
    // res.status(401).json({
    //   status: "fail",
    //   message: "Incorrect Email or password",
    // });
    return;
  } else {
    //(3) if everything is ok,send the token to the client
    const token = signToken(user._id);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    res.cookie('jwt', token, { httpOnly: true });
    // res.clearCookie()
    res.redirect('/loginusers');
    res.status(201).json({
      token: user._id,
    });
    return;
  }
}
// export async function forgotPassword(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   //(1) Get users based on posted Email
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     res.status(404).json({
//       status: "fail",
//       message: "There is no user with email address",
//     });
//     return;
//   }
//   // (2)Generate the random token
//   const resetToken = user.createPasswordResetToken();
//   await user.save({ validateBeforeSafe: false });
//   // res.status(200).json({
//   //   Message: 'Password reset successful check your email',
//   // });
//   // (3) Send it back as an email
//   const resetURL = `${req.protocol}://${req.get(
//     "host"
//   )} /api/v1/users/resetPassword/${resetToken}`;
//   const message = `Forgot your password? Submit a PATCH request with your new password and password confirm to:${resetURL}.\nIf you didnt forget your password, please ignore this email!`;
//   try {
//     const myEmail = {
//       email: user.email,
//       subject: "Your password reset token (valid for 10 min)",
//       message,
//     };
//     await sendEmail(myEmail);
//     res.status(200).json({
//       status: "success",
//       message: "token sent to email",
//     });
//   } catch (err) {
//     user.passwordResetToken = undefined;
//     user.passwordResetExpires = undefined;
//     await user.save({ validateBeforeSafe: false });
//     res.status(500).json({
//       err: err,
//       status: "fail",
//       message:
//         "There was an error sending the message the mail. Try again later!",
//     });
//   }
// }
// export async function resetPassword(
//   req: Request,
//   res: Response
// ): Promise<void> {
//   //(1)Get user based on the token
//   const hashedToken = crypto
//     .createHash("sha256")
//     .update(req.params.token)
//     .digest("hex");
//   const user = await User.findOne({
//     passwordResetToken: hashedToken,
//     passwordResetExpires: { $gt: Date.now() },
//   });
//   //(2)if the token has not expired, and there is user, the new password
//   if (!user) {
//     res.status(400).json({
//       status: "fail",
//       message: "Token is invalid or has expired!",
//     });
//     return;
//   }
//   user.password = req.body.password;
//   user.passwordConfirm = req.body.passwordConfirm;
//   user.passwordResetToken = undefined;
//   user.passwordResetExpires = undefined;
//   await user.save();
//   //(3) Update changedPasswordAt property for the user
//   //(4) Log the user in,send jwt
//   const token = signToken(user._id);
//   res.status(200).json({
//     status: "success",
//     token,
//   });
// }
