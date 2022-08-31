/* eslint-disable import/no-anonymous-default-export */
export default async (
  req: {
    body: {
      firstName: any;
      lastName: any;
      messageContent: string;
      emailAddress: string;
    };
  },
  res: { status: (arg0: number) => void; end: () => void }
) => {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.REACT_APP_EMAIL_HANDLER,
      pass: process.env.REACT_APP_EMAIL_PASSWORD,
    },
  });
  const mailData = {
    from: "antoni.bartczak.mailer@gmail.com",
    to: `${process.env.REACT_APP_MY_EMAIL}`,
    subject: `Message From ${req.body.firstName} ${req.body.lastName}`,
    text: req.body.messageContent + " | Sent from: " + req.body.emailAddress,
    html: `<div>${req.body.messageContent}</div><p>Sent from:
      ${req.body.emailAddress}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        res.status(500);
        console.error(err);
        reject(err);
        res.end();
      } else {
        res.status(200);
        console.log(info);
        resolve(info);
        res.end();
      }
    });
  });
};
