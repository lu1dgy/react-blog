import React from 'react'
import MyPostsContainter from './MyPosts/MyPostsContainter'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './Profile.module.css'

const Profile: React.FC = () => {
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo />
      <MyPostsContainter />
    </div>
  )
}

export default Profile
