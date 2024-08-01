import { trim } from "@utils"
import React, { ReactNode } from "react"

interface RoadAndZoneTableProps {
  name: string
  date?: ReactNode
  description: string
  item?: {}
  handleClick?: () => void
  handleDelete?: () => void
}

const RoadAndZoneTable: React.FC<RoadAndZoneTableProps> = (props) => {
  const { name, date, description, handleClick, handleDelete } = props
  return (
    <>
      <tr className="bg-white hover:bg-gray-200 dark:bg-black cursor-pointer dark:hover:bg-gray-600">
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

export default RoadAndZoneTable
