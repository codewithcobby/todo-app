import { trim } from "@utils"
import React, { ReactNode } from "react"
import Button from "./Button"
import { useRouter } from "next/navigation"
import { Locations } from "@utils/types"

interface EntryTableProps {
  id?: string
  location?: Locations
  reporter?: string
  status?: string
  category?: string
  createdAt?: ReactNode
  updatedAt?: ReactNode
  handleClick: () => void
  handleDelete: () => void
}

const EntryTable: React.FC<EntryTableProps> = (props) => {
  const { id, location, handleClick, reporter, status, category, createdAt, updatedAt, handleDelete } = props
  const router = useRouter()
  return (
    <tr className="bg-white hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600 dark:bg-black">
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">{id}</td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">{location?.what_three_words}</td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">
        {trim(location?.address || "", 20)}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">{reporter}</td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">{status}</td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">{category}</td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">{createdAt}</td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">{updatedAt}</td>
      <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap">
        <div className="flex justify-between items-center">
          <div>
            <Button title="Edit" className="bg-yellow-500" onClick={handleClick} />
          </div>
          <div className="mx-2">
            <Button
              title="Details"
              className="bg-blue-600"
              onClick={() => router.push(`/dashboard?lat=${location?.lat}&&lng=${location?.lng}&&entry_id=${id}`)}
            />
          </div>
          <div>
            <Button title="Download" className="bg-green-600" />
          </div>
          <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap" onClick={handleDelete}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white z-40"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
          </td>
        </div>
      </td>
    </tr>
  )
}

export default EntryTable
