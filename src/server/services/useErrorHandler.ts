import { ErrorRequestHandler, NextFunction, Request, Response } from "express"
import multer from "multer"

export const controllerError = (error: any) => {
  console.log("====================================")
  console.log(error)
  console.log("====================================")
  return {
    success: false,
    message: "Something went wrong, please try again",
  }
}

export const appErrorHandler = () => (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError) {
    return res.status(400).send({
      success: false,
      message: "Something went wrong, please try again",
    })
  } else if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).send({
        message: "File too large",
      })
    }
    if (err.code === "LIMIT_FIELD_COUNT") {
      return res.status(400).send({
        message: "You can not upload more than one file",
      })
    }

    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).send({
        message: "File should be an image",
      })
    }
  } else {
    return res.status(500).send({
      success: false,
      message: "Something went wrong, please try again",
    })
  }
}
