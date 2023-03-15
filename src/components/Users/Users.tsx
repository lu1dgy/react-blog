import React from 'react'

import User from './User'
import style from './Users.module.css'
import { UsersProps } from './UsersAPIComponent'

const Users: React.FC<UsersProps> = ({ users, ...restProps }) => {
  return (
    <div className={style.userList}>
      <div className={style.paginationButtons}>
        <button className={`${style.button} ${style.pickedButton}`}>1</button>
        <button className={style.button}>2</button>
        <button className={style.button}>3</button>
        <button className={style.button}>4</button>
        <button className={style.button}>5</button>
      </div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          {...restProps}
        />
      ))}
    </div>
  )
}

export default Users
