const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "219b2edebbf2cb",
    pass: "b8f43d27e29752"
  }
})

module.exports = transport