import React from 'react'
import { Link } from 'react-router-dom'

export const NavB = () => {
  return (
      <div className="w-full bg-gray-600 flex justify-around text-white py-2">
        <span className='w-1/2'>
          <img src='https://res.cloudinary.com/edwin3002/image/upload/v1656561378/portafolio/logo-circle_rqq2e4.png' width='40px' className='ml-10'/>
        </span>

        <nav className="w-1/2 flex justify-around font-bold">
        <Link to='/' className='flex items-center'>
          <a
            className="p-1 rounded-lg hover:bg-gray-700 transition-colors"
            >
            Inicio
          </a>
            </Link>
          <Link to='/create' className='flex items-center'>
            <a
            className="p-1 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Create_Task
          </a></Link>
        </nav>
      </div>
  )
}
