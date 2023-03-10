import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeLink = (link) => (link.isActive ? styles.activeLink : '')
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to='/profile'
          className={(link) => (link.isActive ? styles.activeLink : '')}>
          Profile
        </NavLink>
      </div>
      <div className={`${styles.item}`}>
        <NavLink
          to='/dialogs'
          className={activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={activeLink}
          to='/users'>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={activeLink}
          to='/'>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={activeLink}
          to='/1'>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
