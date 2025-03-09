import React from 'react'
import { NavLink } from 'react-router'
function NavbarItem(prop) {
  return (
    <div>
        <li className="w-16 text-center hover:text-blue-400 hover:text-xl hover:underline hover:underline-offset-8 hover:decoration-gray-300">
            <NavLink to={prop.To}>{prop.title}</NavLink>
        </li>
    </div>
  )
}

export default NavbarItem
