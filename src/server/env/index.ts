import dotenv from "dotenv"

//env file configuration
dotenv.config()

export default {
  PORT: process.env.PORT || 8085,
  DATABASE: process.env.DATABASE_URI as string,
  PG_DB_NAME: process.env.PG_DB_NAME as string,
  PG_USER: process.env.PG_USER as string,
  PG_PASSWORD: process.env.PG_PASSWORD as string,
  ADMIN_SCECRET_TOKEN: process.env.ADMIN_SCECRET_TOKEN as string,
  ADMIN_REFRESH_TOKEN: process.env.ADMIN_REFRESH_TOKEN as string,
  PHARMACY_SCECRET_TOKEN: process.env.PHARMACY_SCECRET_TOKEN as string,
  PHARMACY_REFRESH_TOKEN: process.env.PHARMACY_REFRESH_TOKEN as string,
  USER_SECRET_TOKEN: process.env.USER_SECRET_TOKEN as string,
  USER_REFRESH_TOKEN: process.env.USER_REFRESH_TOKEN as string,
  FIREBASE_SERVICE_KEY: process.env.FIREBASE_SERVICE_KEY as string,
  SECRET_TOKEN_COURIER: process.env.SECRET_TOKEN_COURIER as string,
  REFRESH_TOKEN_COURIER: process.env.REFRESH_TOKEN_COURIER as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
  AWS_ACCESS_KEY_VALUE: process.env.AWS_ACCESS_KEY_VALUE as string,
  AWS_SECRET_KEY_VALUE: process.env.AWS_SECRET_KEY_VALUE as string,
  AWS_REGION_NAME: process.env.AWS_REGION_NAME as string,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME as string,
  TERMI_SMS_API: process.env.TERMI_SMS_API as string,
  MNOTIFY_KEY: process.env.MNOTIFY_KEY as string,
  PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY as string,
}
