import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to='/profile'
          className={(link) => (link.isActive ? styles.activeLink : '')}>
          Profile
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink
          to='/dialogs'
          className={(link) => (link.isActive ? styles.activeLink : '')}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/'>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/'>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
