const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.APP_EMAIL,
//     pass: process.env.APP_EMAIL_PASS,
//   },
// });
// SMTP Server(Rackspace Email Hosting): secure.emailsrvr.com
// SMTP port: 587
// SMTP security: TLS
// SMTP username: contact@completegreet.com
// SMTP password: 1212Fiverr

const transporter = nodemailer.createTransport({
  host: 'secure.emailsrvr.com',
  port: 587,
  auth: {
      user: 'support@completegreet.com',
      pass: 'Fiverr159'
  }
});

module.exports.sendMail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.error('mail error -> ', err);
        return reject(err);
      } else {
        return resolve(info);
      }
    });
  });
};
