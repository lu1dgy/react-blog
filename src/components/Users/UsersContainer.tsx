import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { RootState } from '../../redux/store'
import { follow, setUsers, showMoreUsers, unFollow, toggleIsLoading } from '../../redux/users/users'
import { User } from '../../redux/users/types'
import { usersOnPage } from '../../utils/constants'
import Users from './'
import Preloader from '../common/Preloader'

export interface UsersProps {
  users: User[]
  follow: (id: number) => void
  unFollow: (id: number) => void
  showMore: () => void
}

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { users, page, isLoading } = useSelector((state: RootState) => state.users)

  const handleFollow = useCallback(
    (userId: number) => {
      dispatch(follow(userId))
    },
    [dispatch]
  )

  const handleUnfollow = useCallback(
    (userId: number) => {
      dispatch(unFollow(userId))
    },
    [dispatch]
  )

  const handleToggleIsLoading = useCallback(() => {
    dispatch(toggleIsLoading())
  }, [dispatch])

  const handleSetUsers = useCallback(
    (users: User[]) => {
      dispatch(setUsers(users))
    },
    [dispatch]
  )

  const handleShowMore = useCallback(() => {
    dispatch(showMoreUsers())
  }, [dispatch])

  useEffect(() => {
    const fetchUsers = async () => {
      handleToggleIsLoading()
      const response = await axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${usersOnPage}&page=${page}`
      )
      handleSetUsers(response.data.items)
      handleToggleIsLoading()
    }
    fetchUsers()
  }, [handleSetUsers, handleToggleIsLoading, page])

  return (
    <>
      {isLoading && <Preloader />}
      <Users
        follow={handleFollow}
        unFollow={handleUnfollow}
        showMore={handleShowMore}
        users={users}
      />
    </>
  )
}

export default UsersContainer
