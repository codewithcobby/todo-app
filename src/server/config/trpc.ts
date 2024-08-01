import { initTRPC } from "@trpc/server"
import * as trpcExpress from "@trpc/server/adapters/express"
import express from "express"

// created for each request
export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({ req, res })
type Context = ReturnType<typeof createContext>
const t = initTRPC.context<Context>().create()
export const router = t.router
export const publicProcedure = t.procedure
