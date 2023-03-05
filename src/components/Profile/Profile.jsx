import React from 'react'
import MyPostsContainter from './MyPosts/MyPostsContainter'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainter />
    </div>
  )
}

export default Profile
