"use client"
import { ReactNode } from "react"
import { trpc } from "../utils/trpc"
import "./globals.css"

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default trpc.withTRPC(RootLayout)
