import { ProfileState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: ProfileState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 },
  ],
  newPostText: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state) => {
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0,
      }
      state.posts.push(newPost)
      state.newPostText = ''
    },
    updateNewPostText: (state, action: PayloadAction<string>) => {
      state.newPostText = action.payload
    },
  },
})

export const { addPost, updateNewPostText } = profileSlice.actions

export const selectProfile = (state: RootState) => state.profile

export default profileSlice.reducer
