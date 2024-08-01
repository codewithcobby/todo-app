import bcrypt from "bcryptjs"

export const randomString = (length: number) => {
  var result = ""
  var characters = "!@#$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result + "@$"
}

export const randomInterger = (length: number) => Math.floor(Math.random() * length) + 1
export const longRandomInterger = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) * 10)

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

export const intlPhoneNumber = (telephone: string, countryCode?: string) => telephone.replace(/^./, countryCode || "+233")

export const signupMessage = () => `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>CrediPay</title>
</head>

<body style="margin: 0; padding: 0; background-color: #fcfcfc; color: #404040; font-family: Arial, Helvetica">
  <table role="presentation" style="width: 100%; border-spacing: 0; text-align: center">
    <td align="center" style="padding: 40px 0 30px 0">
      <img src="https://campuseatsglobal.s3.af-south-1.amazonaws.com/media/512+x+512+credipay+logos-frank.png" alt="Credipay logo"
        style="width: 150px; height: auto; display: block; margin-right: auto; margin-left: auto; margin-top: 20px" />
    </td>
  </table>

  <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0">
    <h1 style="text-align: center; font-size: 36px; line-height: 40px; margin-top: 20px">Welcome to CrediPay</h1>

    <p style="text-align: center; font-size: 14px; margin-top: 30px; padding: 10px">
    Welcome to the start of a transformative journey in enabling instant credit and payment solutions for millions in Africa. <br/> We're thrilled to have you on board!.
    </p>

    <p style="text-align: center; font-size: 14px; margin-top: 30px; padding: 10px">
    Here's a quick guide to connect your app and integrate our APIs:
    </p>

    <div style="
          border: 1px solid #fcfcfc;
          border-radius: 12px;
          margin-top: 20px;
          background-color: #0571ea;
          padding: 15px;
          width: 200px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        ">
      <a href="https://www.credipay.finance/get-started" style="color: #fcfcfc; text-decoration: none; text-align: center">Get started </a>
    </div>
    <div style="margin-top: 200px" />
  </table>
</body>

</html>`
