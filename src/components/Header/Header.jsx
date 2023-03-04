import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src='https://i.pinimg.com/550x/b5/bd/ff/b5bdff3fb5d52173cf7ccd260c8d05a3.jpg'
        alt='logo'
      />
    </header>
  )
}

export default Header
