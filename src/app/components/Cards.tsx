import Link from "next/link"
import React from "react"
import BinIcon from "./BinIcon"

interface CardsProps {
  title: string
  details: string
  link?: string
  onClick?: () => void
  handleDelete?: () => void
}

const Cards: React.FC<CardsProps> = (props) => {
  const { title, details, link, onClick, handleDelete } = props
  return (
    <Link
      href={link ? link : "#"}
      className="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 "
    >
      <div className="flex justify-between items-center">
        <div className="mb-8" onClick={onClick}>
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 11C15 13.038 12.761 15.5 10 15.5C7.239 15.5 5 13.038 5 11C5 12.444 15 12.444 15 11Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.06117 6.89466C7.05247 6.91839 7.04467 6.94243 7.03778 6.96675C7.0126 6.9658 6.9874 6.9658 6.96222 6.96675C6.95534 6.94243 6.94753 6.91839 6.93883 6.89466C6.95977 6.88062 6.98018 6.86579 7 6.85021C7.01982 6.86579 7.04023 6.88062 7.06117 6.89466ZM12.9622 6.96675C12.9553 6.94243 12.9475 6.91839 12.9388 6.89466C12.9598 6.88062 12.9802 6.86579 13 6.85021C13.0198 6.86579 13.0402 6.88062 13.0612 6.89466C13.0525 6.91839 13.0447 6.94243 13.0378 6.96675C13.0126 6.9658 12.9874 6.9658 12.9622 6.96675Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="mb-8 z-50" onClick={handleDelete}>
          <BinIcon />
        </div>
      </div>
      <div className="pb-6" onClick={onClick}>
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">{details}</p>
      </div>
    </Link>
  )
}

export default Cards
