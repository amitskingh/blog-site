import { useState } from "react"
import {
  SunIcon,
  MoonIcon,
  HomeIcon,
  ShareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

export default function Navbar() {
  const [firstMenuOpen, setFirstMenuOpen] = useState(false)
  const [secondMenuOpen, setSecondMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setFirstMenuOpen(!firstMenuOpen)
  }

  const handlePhotoClick = () => {
    setSecondMenuOpen(!secondMenuOpen)
  }

  return (
    <>
      {/* Overlay */}
      {firstMenuOpen && (
        <div
          onClick={handleMenuClick}
          className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
            firstMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      )}

      {/* Navbar */}
      <nav className="flex w-full px-4  h-10 justify-between items-center outline-red-500 outline">
        <div className="outline outline-red-500">
          <img
            onClick={handlePhotoClick}
            className="cursor-pointer inline-block size-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="size-5">
            <SunIcon />
            {/* <MoonIcon/> */}
          </button>
          <button
            className="flex flex-col items-end gap-1"
            onClick={handleMenuClick}
          >
            <span className="block w-7 h-1 rounded bg-black "></span>
            <span className="block w-5 h-1 rounded bg-black "></span>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`px-4 py-6 fixed top-0 right-0 bg-slate-50 h-full w-64 z-10 transform transition-transform duration-300 ${
          firstMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <ul className="border-b-2 pb-2  border-black">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>Shared</li>
            <li>Publish</li>
          </ul>
          <ul className=" mt-2">
            <li>Notebook</li>
            <li>Notebook</li>
            <li>Notebook</li>
            <li>Notebook</li>
            <li>Notebook</li>
            <li>Notebook</li>
            <li>Notebook</li>
            <li>Notebook</li>
            <li>Notebook</li>
          </ul>
        </div>
      </div>

      <div
        className={`bg-white w-48 z-10 p-3  ml-4 mt-2 rounded-lg shadow shadow-blue-200 outline-red-600 outline transform transition-transform duration-300 ${
          secondMenuOpen ? "translate-y-0" : "-translate-y-60"
        }`}
      >
        <ul className="pb-2  border-black">
          <li>
            <div className="flex justify-between">
              <p>Your Profile</p>
              <button onClick={handlePhotoClick}>
                <XMarkIcon className="size-6" />
              </button>
            </div>
          </li>
          <li>Setting</li>
          <li>Sign out</li>
        </ul>
      </div>
    </>
  )
}
