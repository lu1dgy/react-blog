import React from 'react'
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
    props.addPost()
  }

  const onPostChange = (e) => {
    const text = e.target.value
    props.updateNewPostText(text)
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
