import axios from "axios"
import env from "@env/index"

export const SendSMSUsingMnotify = async (telephone: string, messageToUser: string, senderId: string) => {
  await axios
    .post(
      `https://api.mnotify.com/api/sms/quick?key=${env.MNOTIFY_KEY}`,
      { recipient: [telephone], sender: senderId, message: messageToUser },
      { headers: { Accept: "application/json" } }
    )
    .then(({ data }) => data.message)
    .catch((err) => err)
}

export const SendSMSUsingTermi = async (telephone: string, messageToUser: string, senderId: string) => {
  let data = {
    to: telephone,
    from: senderId,
    sms: messageToUser,
    type: "plain",
    api_key: env.TERMI_SMS_API,
    channel: "generic",
  }
  return await axios.post("https://api.ng.termii.com/api/sms/send", data, { headers: { "Content-Type": "application/json" } })
}

export const SendWebNotifications = async (user: string | undefined, title: string, message: string) => {
  await axios
    .post(
      "https://fcm.googleapis.com/fcm/send",
      { to: user, notification: { "mutable-content": true, title: title, body: message, sound: "default" } },
      { headers: { "Content-Type": "application/json", Authorization: `key=${env.FIREBASE_SERVICE_KEY}` } }
    )
    .then((data) => data)
    .catch((err) => err)
}
