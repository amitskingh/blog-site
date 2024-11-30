import { useState } from "react"
import {
  SunIcon,
  MoonIcon,
  HomeIcon,
  ShareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

const navbarItems = [
  { id: "Home", name: "Home", href: "#" },
  { id: "Workspace", name: "Worksace", href: "#" },
  { id: "People", name: "People", href: "#" },
]

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
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
            firstMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      )}

      {/* Navbar */}
      <nav className="flex sticky inset-0 ring-1 ring-slate-100 w-full px-4 h-10 bg-white justify-between items-center border-b-2 border-b-slate-200 shadow">
        <div>
          {/* <div> */}
          <img
            onClick={handlePhotoClick}
            className="cursor-pointer inline-block size-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          {/* </div> */}
          {/* Profile Menu */}
          <div
            className={`absolute bg-white w-48 z-10 p-3  ml-4 mt-2 rounded-lg shadow shadow-blue-200 transform transition-transform duration-300 ${
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
            <span className="block w-6 h-1 rounded bg-black "></span>
            <span className="block w-4 h-1 rounded bg-black "></span>
          </button>
        </div>
      </nav>

      {/* Sidebar Menu*/}
      <div
        className={`px-4 py-6 fixed top-0 right-0 bg-slate-50 h-full w-64 z-10 transform transition-transform duration-300 ${
          firstMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div>
            <ul className="border-b-2 pb-2  border-black">
              {navbarItems.map((item) => (
                <li>
                  <a key={item.name} id={item.id} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>{/* Menu */}</div>
        </div>
      </div>
    </>
  )
}
