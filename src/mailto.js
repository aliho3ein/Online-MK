/*const express = require("express");
const nodemailer = require("nodemailer");

const mailto = express();
const port = 3000;

function sendEmail() {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      secure: "gmail",
      auth: {
        user: "aliho3ein.de@gmail.com",
        pass: "Alieloalya2022?",
      },
    });

    const mail_configs = {
      from: "aliho3ein.de@gmail.com",
      to: "alihossain.ahmadi@dci.education",
      subject: "tets",
      text: "body",
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log("error");
      } else console.log("ok");
    });
  });
}

/*mailto.get("/", (req, res) => {});
mailto.listen(port, () => {
  sendEmail().then((rep) => {
    console.log("ok2");
  });
});*/
