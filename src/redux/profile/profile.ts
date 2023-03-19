import { ProfilePage, ProfileState } from './types'
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
  profile: {
    name: 'Loading...',
    photos: {
      small: 'https://www.polytec.com.au/img/products/960-960/mercurio-grey.jpg',
      large: 'https://www.polytec.com.au/img/products/960-960/mercurio-grey.jpg',
    },
    userId: 1209521325219,
    status: 'Loading...',
  },
  isLoading: false,
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
      state.posts.unshift(newPost)
      state.newPostText = ''
    },
    updateNewPostText: (state, action: PayloadAction<string>) => {
      state.newPostText = action.payload
    },
    setUserProfile: (state, action: PayloadAction<ProfilePage>) => {
      state.profile = action.payload
    },
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading
    },
  },
})

export const { addPost, updateNewPostText, setUserProfile, toggleIsLoading } = profileSlice.actions

export const selectProfile = (state: RootState) => state.profile

export default profileSlice.reducer
