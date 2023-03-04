import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const postsElements = props.posts.map((p, i) => (
    <Post
      key={i}
      message={p.message}
      likesCount={p.likesCount}
    />
  ))

  const addPost = () => {
    props.dispatch(addPostCreator())
  }

  const onPostChange = (e) => {
    props.dispatch(updateNewPostTextCreator(e.target.value))
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
