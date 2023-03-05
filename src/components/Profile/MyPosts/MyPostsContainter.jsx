import React from 'react'

import { addPostCreator, updateNewPostTextCreator } from '../../../redux/reducers/profile'
import StoreContext from '../../../StoreContext'
import MyPosts from './MyPosts'

const MyPostsContainter = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState()
        const addPost = () => {
          store.dispatch(addPostCreator())
        }

        const updateNewPostText = (text) => {
          const action = updateNewPostTextCreator(text)
          store.dispatch(action)
        }

        return (
          <MyPosts
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            posts={state.profile.posts}
            newPostText={state.profile.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainter
