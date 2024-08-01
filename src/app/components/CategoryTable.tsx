import url from "@api/url"
import { trim } from "@utils"
import React, { ReactNode } from "react"

interface CategoryTableProps {
  name: string
  date?: ReactNode
  icon?: string
  description: string
  item?: {}
  handleClick?: () => void
  handleDelete?: () => void
}

const CategoryTable: React.FC<CategoryTableProps> = (props) => {
  const { name, date, description, handleClick, handleDelete, icon } = props
  return (
    <>
      <tr className="bg-white dark:bg-black hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600">
        <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap" onClick={handleClick}>
          <img src={`${url.image}/${icon}`} alt={name} className="rounded-full w-8 h-8" />{" "}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap" onClick={handleClick}>
          {name}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap" onClick={handleClick}>
          {trim(description, 100)}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-black dark:text-white whitespace-nowrap" onClick={handleClick}>
          {date}
        </td>
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
      </tr>
    </>
  )
}

export default CategoryTable
