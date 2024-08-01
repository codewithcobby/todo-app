import { httpBatchLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"
import type { AppRouterType } from "../server/index"

export const trpc = createTRPCNext<AppRouterType>({
  config(opts) {
    return {
      links: [httpBatchLink({ url: process.env.NEXT_PUBLIC_BASE_API_URL || "" })],
    }
  },
  ssr: false,
})
