import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const activeLink = (link: { isActive?: boolean }) => (link.isActive ? styles.activeLink : '')
  return (
    <nav className={styles.nav}>
      <ul className={styles.itemList}>
        <li className={styles.item}>
          <NavLink
            to='/profile'
            className={(link: { isActive?: boolean }) => activeLink(link)}>
            Profile
          </NavLink>
        </li>
        <li className={`${styles.item}`}>
          <NavLink
            to='/dialogs'
            className={activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={activeLink}
            to='/users'>
            Users
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={activeLink}
            to='/music'>
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={activeLink}
            to='/settings'>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
