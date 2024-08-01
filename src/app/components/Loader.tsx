import React from "react"

interface LoaderProps {
  color?: string
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { color } = props
  return (
    <div className="flex items-center justify-center">
      <div className={`w-6 h-6 border-l-2 border-${color || "gray"}-100 rounded-full animate-spin`} />
    </div>
  )
}

export default Loader
