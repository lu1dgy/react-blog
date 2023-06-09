import React from 'react'
import { ProfilePage } from '../../../redux/profile/types'
import styles from './ProfileInfo.module.css'
import defaultBackground from '../../../assets/images/defaultBackground.jpg'
import defaultAvatar from '../../../assets/images/default-avatar.jpg'

type ProfileInfoProps = {
  profile: ProfilePage
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  console.log(profile)
  return (
    <div>
      <div>
        <img
          className={styles.profileImage}
          src={profile.photos.large === null ? defaultBackground : profile.photos.large}
          alt='profileImage'
        />
      </div>
      <div className={styles.photoBlock}>
        <img
          className={styles.profileAvatar}
          src={profile.photos.small === null ? defaultAvatar : profile.photos.small}
          alt='profileAvatar'
        />
      </div>
      <div className={styles.descriptionBlock}>
        <p className={styles.name}>{profile.name === null ? 'Full name' : profile.name}</p>
        <p className={styles.status}>{profile.status === null ? 'No status' : profile.status}</p>
      </div>
    </div>
  )
}

export default ProfileInfo
