import { Request, Response } from "express"

export const emitEvent = (resolved: boolean, event: string, data?: {}) => (req: Request, res: Response) => {
  const io = req.app.get("io")
  resolved && io.emit(event, data || {})
}
