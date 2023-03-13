import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const activeLink = (link: { isActive?: boolean }) => (link.isActive ? styles.activeLink : '')
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to='/profile'
          className={(link: { isActive?: boolean }) => activeLink(link)}>
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
