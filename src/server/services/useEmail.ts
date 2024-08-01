import nodemailer from "nodemailer"
import env from "@env/index"

export const sendEmail = async (receipent: string, subject: string, message: string) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "thecredipayteam@gmail.com",
        pass: env.GOOGLE_CLIENT_SECRET,
      },
    })
    let mailOptions = {
      from: 'The CrediPay Team" <thecredipayteam@gmail.com>',
      to: receipent,
      subject: subject,
      html: message,
    }
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) return
      transporter.close()
      return "Email sent: " + info.response
    })
  } catch (error) {
    console.log(error)
    return error
  }
}
