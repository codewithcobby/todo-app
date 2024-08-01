import React from "react"
import Loader from "./Loader"

interface ButtonProps {
  title: string | JSX.Element
  type?: "button" | "reset" | "submit" | undefined
  loading?: boolean
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, type, loading, disabled, onClick, className } = props
  return (
    <button
      type={type}
      className={`${
        className || "bg-indigo-600  hover:bg-indigo-500 focus-visible:outline-indigo-600"
      } flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <Loader /> : title}
    </button>
  )
}

export default Button
