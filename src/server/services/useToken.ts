import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"
import bcrypt from "bcryptjs"
import { randomString } from "./useCustoms"

export const createToken = (body: string | object | Buffer, secretKey: string, options?: jwt.SignOptions) =>
  jwt.sign(body, secretKey, options)

export const verifyAndCreateAccessToken =
  (userRefreshToken: string, secretKey: string) => async (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken } = req.body
    if (!refreshToken) return res.status(401).send("Access Denied")
    try {
      const verified: any = jwt.verify(refreshToken, userRefreshToken)
      const random = randomString(2)
      if (verified) {
        const accessToken = createToken({ ...verified, random }, secretKey, { expiresIn: "60d" })
        return res.status(200).json({ accessToken })
      }
    } catch (error) {
      return res.status(400).send("Invalid Token")
    }
  }

export const validateToken = (headers: string, key: string) => (req: Request, res: Response, next: NextFunction) => {
  const token = req.header(headers)
  if (!token) return res.status(401).send("Access Denied")
  try {
    const verified = jwt.verify(token, key)
    if (verified) res.locals.auth = verified
    next()
  } catch (error) {
    return res.status(401).send("Access Denied")
  }
}

export const verifyPassword = (password: string, hashedPassword: string) => bcrypt.compareSync(password, hashedPassword)
