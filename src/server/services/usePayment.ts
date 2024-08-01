import env from "@env/index"

export const usePayStackPayment = (body: { amount: string | number; email: string; phone: string; network: string }) => {
  const params = JSON.stringify({
    amount: body.amount,
    email: body.email,
    currency: "GHS",
    mobile_money: {
      phone: body.phone,
      provider: body.network,
    },
  })
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/charge",
    method: "POST",
    headers: {
      Authorization: env.PAYSTACK_SECRET_KEY,
      "Content-Type": "application/json",
    },
  }

  return { params, options }
}

export const usePayStackPaymentOTP = (body: { otp: number; reference: string }) => {
  const params = JSON.stringify({
    otp: body.otp,
    reference: body.reference,
  })
  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/charge/submit_otp",
    method: "POST",
    headers: {
      Authorization: env.PAYSTACK_SECRET_KEY,
      "Content-Type": "application/json",
    },
  }

  return { params, options }
}
