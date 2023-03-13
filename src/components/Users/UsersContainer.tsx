import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../../redux/users/types'
import { RootState } from '../../redux/store'
import { follow, unFollow, setUsers } from '../../redux/users/users'
import Users from './Users'

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const followUser = (userId: number) => {
    dispatch(follow(userId))
  }
  const unFollowUser = (userId: number) => {
    dispatch(unFollow(userId))
  }
  const setArrOfUsers = (users: User[]) => {
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
