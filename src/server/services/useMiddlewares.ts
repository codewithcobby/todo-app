import env from "@env/index"
import { validateToken, verifyAndCreateAccessToken } from "./useToken"
import multer from "multer"
import { Request } from "express"

//Validating token middleware
export const useUser = () => validateToken("auth-user-token", env.USER_SECRET_TOKEN)
export const useAdmin = () => validateToken("auth-admin-token", env.ADMIN_SCECRET_TOKEN)

//Generating new token middlewares
export const ceateAdminToken = () => verifyAndCreateAccessToken(env.ADMIN_REFRESH_TOKEN, env.ADMIN_SCECRET_TOKEN)
export const createUserToken = () => verifyAndCreateAccessToken(env.USER_REFRESH_TOKEN, env.USER_SECRET_TOKEN)

//Custom Middlewares
export const useUploader = () => {
  const storage = multer.memoryStorage()

  const fileFilter = (req: Request, file: any, cb: any) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/webp"
    ) {
      cb(null, true)
    } else {
      cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false)
    }
  }

  return multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1000000 },
  })
}
