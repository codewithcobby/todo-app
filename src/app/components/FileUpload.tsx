import React from "react"
import { PhotoIcon } from "@heroicons/react/24/solid"

interface FileUploadProps {
  fileExist?: boolean
  useUrl?: boolean
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  image: string
}

const FileUpload: React.FC<FileUploadProps> = (props) => {
  const { fileExist, image, useUrl, handleFile } = props
  return (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white px-6 py-10">
      {fileExist ? (
        <div
          className="w-full h-40 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${`${""}/${image}`})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : (
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-white">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 px-3"
            >
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => handleFile(e)} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600 dark:text-white">PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
    </div>
  )
}

export default FileUpload
