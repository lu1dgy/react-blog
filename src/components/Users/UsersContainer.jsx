import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Users from './Users'
import { follow, unFollow, setUsers } from '../../redux/reducers/users'

const UsersContainer = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  const followUser = (userId) => {
    dispatch(follow(userId))
  }
  const unFollowUser = (userId) => {
    dispatch(unFollow(userId))
  }
  const setArrOfUsers = (users) => {
    dispatch(setUsers(users))
  }
  return (
    <Users
      unFollow={unFollowUser}
      follow={followUser}
      users={users}
      setUsers={setArrOfUsers}
    />
  )
}

export default UsersContainer
