import React from 'react'
import axios from 'axios'

import style from './Users.module.css'
import defaultAvatar from '../../assets/images/default-avatar.jpg'

function Users({ users, follow, unFollow, setUsers }) {
  React.useEffect(() => {
    if (users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
        setUsers(res.data.items)
      })
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className={style.userList}>
      {users.map((user) => (
        <div
          key={user.id}
          className={style.user}>
          <div className={style.imageBlock}>
            <img
              className={style.userAvatar}
              alt='userImg'
              src={user.photos.small === null ? defaultAvatar : user.photos.small}
            />
            <button
              className={style.followBtn}
              onClick={() => (user.followed ? unFollow(user.id) : follow(user.id))}>
              {user.followed ? 'Unfollow' : 'Follow'}
            </button>
          </div>
          <div className={style.userInfo}>
            <div className={style.nameBlock}>
              <h3>{user.name}</h3>
              <p className={style.userStatus}>{user.status === null ? 'no status' : user.status}</p>
            </div>
            {/* <div className={style.locationBlock}>
              <p className={style.userCountry}>{user.location?.country}</p>
              <p className={style.userCity}>{user.location?.city}</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
