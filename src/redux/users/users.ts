import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'

type UsersState = {
  users: User[]
  page: number
  isLoading: boolean
}

const initialState: UsersState = {
  users: [],
  page: 1,
  isLoading: false,
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
    showMoreUsers: (state) => {
      state.page++
    },
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading
    },
  },
})

export const { follow, unFollow, setUsers, showMoreUsers, toggleIsLoading } = usersSlice.actions

export default usersSlice.reducer
