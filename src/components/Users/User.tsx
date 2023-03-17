import React from 'react'
import { useInView } from 'react-intersection-observer'

import { User as userProps } from '../../redux/users/types'

import defaultAvatar from '../../assets/images/default-avatar.jpg'
import style from './Users.module.css'

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
        </>
      )}
    </div>
  )
}

export default User
