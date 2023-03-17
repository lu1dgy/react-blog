import React, { memo } from 'react'
import styles from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type DialogItemProps = {
  id: number
  name: string
}
const DialogItem: React.FC<DialogItemProps> = memo(({ id, name }) => {
  let path = '/dialogs/' + id

  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  )
})

export default DialogItem
