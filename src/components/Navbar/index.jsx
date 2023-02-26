import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <a className={style.link} href='#'>
            Profile
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#'>
            Messages
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#'>
            News
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#'>
            Music
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#'>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
