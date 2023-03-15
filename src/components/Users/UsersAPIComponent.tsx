import React, { useEffect } from 'react'
import axios from 'axios'
import { User } from '../../redux/users/types'
import Users from './Users'

export type UsersProps = {
  users: User[]
  setUsers: (users: User[]) => void
  follow: (id: number) => void
  unFollow: (id: number) => void
}

const UsersAPIComponent: React.FC<UsersProps> = ({ users, setUsers, ...restProps }) => {
  const count = 100
  useEffect(() => {
    if (users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`).then((response) => {
        setUsers(response.data.items)
      })
    }
  }, [users, setUsers])

  return (
    <Users
      users={users}
      setUsers={setUsers}
      {...restProps}
    />
  )
}

export default UsersAPIComponent
