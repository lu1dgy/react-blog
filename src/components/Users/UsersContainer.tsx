import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../../redux/users/types'
import { RootState } from '../../redux/store'
import { follow, unFollow, setUsers, showMoreUsers } from '../../redux/users/users'
import UsersAPIComponent from './UsersAPIComponent'

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const page = useSelector((state: RootState) => state.users.page)
  const followUser = (userId: number) => {
    dispatch(follow(userId))
  }
  const unFollowUser = (userId: number) => {
    dispatch(unFollow(userId))
  }
  const setArrOfUsers = (users: User[]) => {
    dispatch(setUsers(users))
  }
  const setMoreUSers = () => {
    dispatch(showMoreUsers())
  }
  return (
    <UsersAPIComponent
      unFollow={unFollowUser}
      follow={followUser}
      users={users}
      pageNumber={page}
      setUsers={setArrOfUsers}
      showMore={setMoreUSers}
    />
  )
}

export default UsersContainer
