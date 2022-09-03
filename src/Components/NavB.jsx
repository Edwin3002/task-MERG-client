import React from 'react'
import { Link } from 'react-router-dom'

export const NavB = () => {
  return (
    <div>
      <div className="w-full bg-white p-4 grid md:grid-cols-12 gap-4 items-end justify-center">
        <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
          Logo
        </h1>
        <nav className="md:col-span-6 flex items-center gap-4 justify-end font-bold">
        <Link to='/'>
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
            Inicio
          </a>
            </Link>
          <Link to='/create'>
            <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Create_Task
          </a></Link>

        </nav>
      </div>
    </div>
  )
}
