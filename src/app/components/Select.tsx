"use client"
import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { Options } from "../utils/index"

interface SelectProps {
  options: Options[]
  handleChange: (value: any) => void
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, handleChange } = props
  const [selected, setSelected] = useState({ name: "Select one", url: "" })
  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value)
        handleChange(value)
      }}
    >
      {({ open }) => (
        <>
          <div className="relative mt-2 w-full">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 h-11">
              <span className="flex items-center">
                {selected?.url && <img src={`${selected.url}`} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />}
                <span className="ml-3 block truncate">{selected?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {!!options?.length &&
                  options.map((option) => (
                    <Listbox.Option
                      key={option?.id}
                      className={({ active }) => `${
                        active ? "bg-indigo-600 text-white" : "text-gray-900"
                      } relative cursor-default select-none py-2 pl-3 pr-9
                        `}
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            {option?.url && <img src={`${option.url}`} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />}
                            <span className={`${selected ? "font-semibold" : "font-normal"} ml-3 block truncate`}>
                              {option?.name}
                            </span>
                          </div>
                          {selected && (
                            <span
                              className={`${
                                active ? "text-white" : "text-indigo-600"
                              } absolute inset-y-0 right-0 flex items-center pr-4`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default Select
