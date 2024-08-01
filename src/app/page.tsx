"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { trpc } from "../utils/trpc"
import { useRouter } from "next/navigation"
import TextInput from "./components/TextInput"
import Button from "./components/Button"
import Link from "next/link"

export default function Home() {
  const hello = trpc.sayHi.useQuery()
  const user = trpc.user.login.useMutation()
  const navigation = useRouter()

  const [data, setdata] = useState({ email: "", password: "" })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: any) => setdata({ ...data, [event.target.name]: event.target.value })

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    user.mutate(
      { email: data.email, password: data.password },
      {
        onError: (error) => {
          setError(error.message || "An unexpected error occurred")
          setdata({ email: "", password: "" })
        },
        onSuccess: (data) => {
          localStorage.setItem("username", data?.first_name + " " + data?.last_name)
          localStorage.setItem("user_id", data?.id)
          localStorage.setItem("email", data?.email)
          setdata({ email: "", password: "" })
          navigation.push("/dashboard")
        },
      }
    )
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={login} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
              Email address
            </label>
            <div className="mt-2">
              <TextInput type="email" name="email" value={data.email} handleChange={handleChange} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-white">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <TextInput type="password" name="password" value={data.password} handleChange={handleChange} />
            </div>
          </div>
          {error && (
            <div
              className="p-4 mb-4 w-full text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {error}
            </div>
          )}
          <div>
            <Button title="Login" loading={user.status == "pending" ? true : false} />
          </div>
          <div className="text-sm text-center">
            <Link href="/create" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-white">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
