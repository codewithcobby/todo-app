import React, { ReactNode } from "react"

interface EntryDetailCardProps {
  reporter?: string
  threewords: string
  address?: string
  createdAt?: ReactNode
  signType?: string
  signSize?: string
  email?: string
  signCondition?: string
  signDetail?: string
  poleNumber?: string
  poleType?: string
  poleCondition?: string
  deBushing?: string
  poleDetail?: string
  onClick?: () => void
}

const EntryDetailCard: React.FC<EntryDetailCardProps> = (props) => {
  const {
    reporter,
    threewords,
    email,
    address,
    createdAt,
    onClick,
    signType,
    signSize,
    signCondition,
    signDetail,
    poleNumber,
    poleCondition,
    poleDetail,
    poleType,
    deBushing,
  } = props
  return (
    <div
      onClick={onClick}
      className="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 w-96 max-h-[70vh] overflow-auto"
    >
      <div className="flex items-center mb-8">
        <div className="">
          <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{reporter}</h3>
          <h3 className="text-sm tracking-tight text-gray-600 dark:text-white">{email}</h3>
        </div>
      </div>

      <div className="w-full border-t border-gray-400 py-3" />
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        3 Words Location: <span className="font-normal">{threewords}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Nearest/Address: <span className="font-normal">{address || "Not provided"}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Created At: <span className="font-normal">{createdAt}</span>
      </p>

      <div className="w-full border-t border-gray-400 my-6" />
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Sign Type: <span className="font-normal">{signType || "Not provided"}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Sign Size: <span className="font-normal">{signSize || "Not provided"}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Closest Pole Number: <span className="font-normal">{poleNumber || "Not provided"}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Sign Condition: <span className="font-normal">{signCondition || "Not provided"}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Detail: <span className="font-normal">{signDetail || "Not provided"}</span>
      </p>

      <div className="w-full border-t border-gray-400 my-6" />
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Pole Type: <span className="font-normal">{poleType || "Not provided"}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Need De-bushing: <span className="font-normal">{deBushing}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Pole Condition: <span className="font-normal">{poleCondition || "Not provided"}</span>
      </p>
      <p className="font-medium text-sm text-gray-700 dark:text-gray-400">
        Detail: <span className="font-normal">{poleDetail || "Not provided"}</span>
      </p>
    </div>
  )
}

export default EntryDetailCard
