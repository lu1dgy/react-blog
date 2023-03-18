import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.headerLogo}
        src={logo}
        alt='logo'
      />
    </header>
  )
}

export default Header
