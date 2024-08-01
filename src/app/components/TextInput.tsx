import React from "react"

interface TextInputProps {
  type?: React.HTMLInputTypeAttribute
  id?: string
  value?: string | number | readonly string[]
  disabled?: boolean
  className?: string
  placeholder?: string
  name?: string
  handleChange?: (e: any) => void
  required?: boolean
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { type, value, disabled, className, placeholder, name, id, handleChange, required } = props
  return (
    <>
      {type === "textarea" ? (
        <textarea
          id={id || name}
          name={name}
          required={required}
          value={value}
          disabled={disabled}
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          onChange={handleChange}
        />
      ) : (
        <input
          id={id || name}
          name={name}
          type={type}
          required={required}
          value={value}
          disabled={disabled}
          className={
            className ||
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 h-11"
          }
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </>
  )
}

export default TextInput
