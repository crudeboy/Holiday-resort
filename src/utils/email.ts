// import nodemailer from 'nodemailer';
// import config from 'config';
// // import { ObjectId } from 'mongoose';
// // const secret: string = config.get('Users.dbConfig.EMAIL_USERNAME');
// // const days: string = config.get('Users.dbConfig.EMAIL_PASSWORD');
// // const hostz: string = config.get('Users.dbConfig.EMAIL_HOST');
// const portz: number = config.get('Users.dbConfig.EMAIL_PORT');

// type Email = {
//   email: string;
//   subject: string;
//   message: string;
// };
// const sendEmail = async (myEmail: Email): Promise<void> => {
//   //(1) create a transporter

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: portz,
//     secure: false,
//     auth: {
//       user: 'dammydeji.dd@gmail.com',
//       pass: '07066848884',
//     },
//   });
//   //Define the email options
//   const mailOptions = {
//     from: 'dammydeji.dd@gmail.com',
//     to: myEmail.email,
//     subject: myEmail.subject,
//     text: myEmail.message,
//     html: '<b>Hello world?</b>',
//   };
//   // Actually send the email with nodemailer
//   await transporter.sendMail(mailOptions);
//   // console.log('Message sent: %s', info.messageId);
//   // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// };

// export default sendEmail;
