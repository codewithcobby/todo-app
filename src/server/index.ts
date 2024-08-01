import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import env from "@env/index"
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import { appRouter } from "./routers"
import { createContext } from "@config/trpc"

// npx knex migrate:make init --migrations-directory src/server/config/db/migrations
// npx knex migrate:rollback --all --knexfile src/server/config/db/knexfile

const app = express()

app.use(cors())
app.use(express())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext }))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!res.headersSent) {
    res.status(500).json({ error: "Internal Server Error" })
  }
  next(err)
})

app.listen(env.PORT, () => {
  console.log("====================================")
  console.log(`Server running on ${env.PORT}`)
  console.log("====================================")
})

export type AppRouterType = typeof appRouter
