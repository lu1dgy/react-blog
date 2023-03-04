import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to='/profile'
          className={(link) => (link.isActive ? s.activeLink : '')}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to='/dialogs'
          className={(link) => (link.isActive ? s.activeLink : '')}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <a href='/'>News</a>
      </div>
      <div className={s.item}>
        <a href='/'>Music</a>
      </div>
      <div className={s.item}>
        <a href='/'>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
