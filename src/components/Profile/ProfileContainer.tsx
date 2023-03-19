import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Profile from '.'
import { setUserProfile } from '../../redux/profile/profile'
import { ProfilePage } from '../../redux/profile/types'
import { RootState } from '../../redux/store'

const ProfileContainer = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state: RootState) => state.profile.profile)

  const handleSetProfile = useCallback(
    (profile: ProfilePage) => {
      dispatch(setUserProfile(profile))
    },
    [dispatch]
  )

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/5`)
      handleSetProfile(response.data)
    }
    fetchUsers()
  }, [handleSetProfile])

  return <Profile profile={profile} />
}

export default ProfileContainer
