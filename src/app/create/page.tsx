"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { trpc } from "../../utils/trpc"
import { useRouter } from "next/navigation"
import TextInput from "../components/TextInput"
import Button from "../components/Button"
import Link from "next/link"

export default function Home() {
  const user = trpc.user.create.useMutation()

  const navigation = useRouter()

  const [data, setdata] = useState({ first_name: "", last_name: "", email: "", password: "" })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: any) => setdata({ ...data, [event.target.name]: event.target.value })

  const create = async (e: any) => {
    e.preventDefault()
    setError("")
    user.mutate(
      { first_name: data.first_name, last_name: data.last_name, email: data.email, password: data.password },
      {
        onError: (error) => {
          setError(error.message || "An unexpected error occurred")
        },
      }
    )
  }

  useEffect(() => {
    if (user.isSuccess) {
      navigation.push("/")
    }
  }, [user.isSuccess, navigation])

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={create} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                First Name
              </label>
              <div className="mt-2">
                <TextInput type="text" name="first_name" value={data.first_name} handleChange={handleChange} />
              </div>
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Last Name
              </label>
              <div className="mt-2">
                <TextInput type="text" name="last_name" value={data.last_name} handleChange={handleChange} />
              </div>
            </div>

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
              <Button title="Create" loading={user.status == "pending" ? true : false} />
            </div>
            <div className="text-sm text-center">
              <Link href="/" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-white">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
