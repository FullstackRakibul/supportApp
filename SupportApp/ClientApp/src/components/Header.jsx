import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <nav>
                <NavLink to="/profile"> User Profile </NavLink>
                <NavLink to="/agent"> Agent </NavLink>
                <NavLink to="/chat"> Chat Box </NavLink>
            </nav>
        </header>
    </>
  )
}

export default Header
