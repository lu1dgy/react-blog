import React from 'react'
import { useInView } from 'react-intersection-observer'

import { User as userProps } from '../../redux/users/types'

import defaultAvatar from '../../assets/images/default-avatar.jpg'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'

export type UserProps = {
  user: userProps
  follow: (id: number) => void
  unFollow: (id: number) => void
}

const User: React.FC<UserProps> = ({ user, follow, unFollow }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={style.user}>
      {inView && (
        <>
          <div className={style.imageBlock}>
            <NavLink to={'/profile/' + user.id}>
              <img
                className={style.userAvatar}
                alt='userImg'
                src={user.photos.small === null ? defaultAvatar : user.photos.small}
              />
            </NavLink>
            <button
              className={style.followBtn}
              onClick={() => (user.followed ? unFollow(user.id) : follow(user.id))}>
              {user.followed ? 'Unfollow' : 'Follow'}
            </button>
          </div>
          <div className={style.userInfo}>
            <div className={style.nameBlock}>
              <NavLink to={'/profile/' + user.id}>
                <h3>{user.name}</h3>
              </NavLink>
              <p className={style.userStatus}>Status: {user.status === null ? 'no status' : user.status}</p>
            </div>
            {/* <div className={style.locationBlock}>
              <p className={style.userCountry}>{user.location?.country}</p>
              <p className={style.userCity}>{user.location?.city}</p>
            </div> */}
          </div>
        </>
      )}
    </div>
  )
}

export default User
