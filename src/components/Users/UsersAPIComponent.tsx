import React, { useEffect } from 'react'
import axios from 'axios'
import { User } from '../../redux/users/types'
import Users from './Users'

export type UsersProps = {
  users: User[]
  pageNumber: number
  setUsers: (users: User[]) => void
  follow: (id: number) => void
  unFollow: (id: number) => void
  showMore: () => void
}

const UsersAPIComponent: React.FC<UsersProps> = ({ users, setUsers, pageNumber, ...restProps }) => {
  let startCount = 20
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${startCount}&page=${pageNumber}`)
      .then((response) => {
        setUsers(response.data.items)
      })
    // eslint-disable-next-line
  }, [pageNumber, startCount])

  return (
    <Users
      pageNumber={pageNumber}
      users={users}
      setUsers={setUsers}
      {...restProps}
    />
  )
}

export default UsersAPIComponent
