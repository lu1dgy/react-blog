import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'

type UsersState = {
  users: User[]
  newPostText: string
}

const initialState: UsersState = {
  users: [],
  newPostText: '',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      state.users = state.users.map((user) => (user.id === action.payload ? { ...user, followed: true } : user))
    },
    unFollow: (state, action: PayloadAction<number>) => {
      state.users = state.users.map((user) => (user.id === action.payload ? { ...user, followed: false } : user))
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = [...state.users, ...action.payload]
    },
  },
})

export const { follow, unFollow, setUsers } = usersSlice.actions
export default usersSlice.reducer
