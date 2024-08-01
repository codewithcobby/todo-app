import React from "react"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { trim } from "../utils/index"
import profile from "../assets/user.jpeg"
import { trpc } from "../../utils/trpc"

interface ProfileButtonProps {}

const ProfileButton: React.FC<ProfileButtonProps> = ({}) => {
  const navigation = useRouter()
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={profile.src} alt="Profile" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={`${
                  active ? "bg-gray-100 dark:bg-gray-600" : " text-gray-700 dark:text-white"
                } block px-4 py-2 text-sm`}
              >
                {localStorage.getItem("username") || " "}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                onClick={() => localStorage.clear()}
                href="/"
                className={`${
                  active ? "bg-gray-100 dark:bg-gray-600" : " text-gray-700 dark:text-white"
                } block px-4 py-2 text-sm`}
              >
                Sign out
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ProfileButton
