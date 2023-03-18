import React from 'react'

import style from './Users.module.css'
import User from './User'
import { UsersProps } from './UsersContainer'

const Users: React.FC<UsersProps> = ({ users, follow, unFollow, showMore }) => {
  return (
    <div className={style.userList}>
      {/* <div className={style.paginationButtons}>
        <button className={`${style.button} ${style.pickedButton}`}>1</button>
        <button className={style.button}>2</button>
        <button className={style.button}>3</button>
        <button className={style.button}>4</button>
        <button className={style.button}>5</button>
      </div> */}
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          follow={follow}
          unFollow={unFollow}
        />
      ))}
      <button
        className={style.showMoreButton}
        onClick={() => {
          showMore()
        }}>
        Show more
      </button>
      <button
        className={style.backTop}
        onClick={() => {
          window.scrollTo(0, 0)
        }}>
        Go top
      </button>
    </div>
  )
}

export default Users
