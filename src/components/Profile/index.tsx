import React from 'react'
import MyPostsContainter from './MyPosts/MyPostsContainter'
import ProfileInfo from './ProfileInfo'
import styles from './Profile.module.css'
import { ProfilePage } from '../../redux/profile/types'

type ProfileProps = {
  profile: ProfilePage
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo profile={profile} />
      <MyPostsContainter />
    </div>
  )
}

export default Profile
