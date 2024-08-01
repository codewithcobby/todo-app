"use client"
import React, { useEffect, useState } from "react"
import Cards from "../components/Cards"
import Modal from "../components/Modal"
import TextInput from "../components/TextInput"
import Button from "../components/Button"
import ProfileButton from "../components/ProfileButton"
import { trpc } from "../../utils/trpc"

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const [displayModal, setDisplayModal] = useState(false)
  const user_id = Number(localStorage.getItem("user_id"))
  const createTask = trpc.tasks.create.useMutation()
  const editTask = trpc.tasks.update.useMutation()
  const taskData = trpc.tasks.alltask.useQuery(user_id)
  const deleteTask = trpc.tasks.delete.useMutation()
  const [error, setError] = useState<string | null>(null)
  const [data, setdata] = useState({ name: "", description: "", id: 0 })

  const handleChange = (event: any) => setdata({ ...data, [event.target.name]: event.target.value })

  const close = () => {
    setdata({ name: "", description: "", id: 0 })
    setDisplayModal(false)
    setError(null)
  }

  const addTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (data.description == "" || data.name == "") {
      setError("All fields are required")
      return
    }

    setError(null)
    if (data.id) {
      editTask.mutate(
        { id: data.id, name: data.name, description: data.description, user_id: user_id },
        {
          onError: (error) => {
            setError(error.message || "An unexpected error occurred")
          },
          onSuccess: (data) => {
            taskData.refetch()
            close()
          },
        }
      )
    } else {
      createTask.mutate(
        { name: data.name, description: data.description, user_id: user_id },
        {
          onError: (error) => {
            setError(error.message || "An unexpected error occurred")
          },
          onSuccess: (data) => {
            taskData.refetch()
            close()
          },
        }
      )
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black relative w-full ">
      <section className={"w-11/12 mx-auto py-16 relative max-w-[1440px]"}>
        <div className="absolute top-[2%] right-[0%] z-10">
          <ProfileButton />
        </div>
        <div className="pt-10">
          <div className="flex justify-between items-center mb-2">
            <div className="flex justify-center items-center">
              <h3 className="ml-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Tasks</h3>
            </div>
            <div>
              <Button
                title="Add new task"
                onClick={() => {
                  setDisplayModal(true)
                }}
              />
            </div>
          </div>
          {taskData.data?.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 h-full py-10">
              {taskData.data?.map((items) => (
                <Cards
                  title={items.name}
                  details={items.description}
                  onClick={() => {
                    setdata(items)
                    setDisplayModal(true)
                  }}
                  handleDelete={() =>
                    deleteTask.mutate(items.id, {
                      onSuccess: () => {
                        taskData.refetch()
                      },
                    })
                  }
                />
              ))}
            </div>
          ) : (
            <div className="w-full pt-20">
              <h1 className="text-center font-bold text-4xl">No tasks</h1>
            </div>
          )}

          {displayModal && (
            <Modal onClose={close} width="w-2/6">
              <form onSubmit={addTask} className="w-11/12 mx-auto py-10 rounded-lg">
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Task</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white">Kindly fill out forms.</p>
                    <div className="w-full">
                      <div className="my-8">
                        <div className="w-full">
                          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                            Name
                          </label>
                          <div className="mt-2">
                            <TextInput name="name" value={data.name} handleChange={handleChange} />
                          </div>
                        </div>
                      </div>
                      <div className="my-8">
                        <div className="w-full">
                          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                            Description
                          </label>
                          <div className="mt-2">
                            <TextInput type="textarea" name="description" value={data.description} handleChange={handleChange} />
                          </div>
                        </div>
                      </div>
                    </div>
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
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <Button
                    title={data.id ? "Update" : "Create Task"}
                    loading={createTask.status == "pending" || editTask.status === "pending" ? true : false}
                  />
                </div>
              </form>
            </Modal>
          )}
        </div>
      </section>
    </main>
  )
}

export default Page
