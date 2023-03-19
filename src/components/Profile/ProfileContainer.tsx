import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Profile from '.'
import { setUserProfile, toggleIsLoading } from '../../redux/profile/profile'
import { ProfilePage } from '../../redux/profile/types'
import { RootState } from '../../redux/store'
import { useParams } from 'react-router-dom'
import Preloader from '../common/Preloader'

const ProfileContainer = () => {
  const dispatch = useDispatch()
  const { profile, isLoading } = useSelector((state: RootState) => state.profile)
  let { id } = useParams<{ id: string }>() // id form url

  const handleSetProfile = useCallback(
    (profile: ProfilePage) => {
      dispatch(setUserProfile(profile))
    },
    [dispatch]
  )

  const handleToggleIsLoading = useCallback(() => {
    dispatch(toggleIsLoading())
  }, [dispatch])
  //https://social-network.samuraijs.com/api/1.0/profile/
  useEffect(() => {
    handleToggleIsLoading()
    axios.get(`https://64174f8af86e3d55c739d015.mockapi.io/users/${id}`).then((response) => {
      handleSetProfile(response.data)
      handleToggleIsLoading()
    })
  }, [handleSetProfile, id, handleToggleIsLoading])

  return isLoading ? <Preloader /> : <Profile profile={profile} />
}

export default ProfileContainer
