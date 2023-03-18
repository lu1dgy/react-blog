import React, { memo } from 'react'
import styles from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type DialogItemProps = {
  id: number
  name: string
}
const DialogItem: React.FC<DialogItemProps> = memo(({ id, name }) => {
  let path = '/dialogs/' + id
  const activeUser = (link: { isActive?: boolean }) => (link.isActive ? styles.activeLink : '')
  return (
    <div className={styles.nameBlock}>
      <NavLink
        className={(link: { isActive?: boolean }) => activeUser(link)}
        to={path}>
        {name}
      </NavLink>
    </div>
  )
})

export default DialogItem
