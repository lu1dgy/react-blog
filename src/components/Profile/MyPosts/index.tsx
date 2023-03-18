import React from 'react'
import styles from './MyPosts.module.css'
import PostComponent from './Post'
import { Post } from '../../../redux/profile/types'

type MyPostsProps = {
  posts: Post[]
  newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsProps> = ({ posts, newPostText, addPost, updateNewPostText }) => {
  const postsElements = posts.map((p: Post, i: number) => (
    <PostComponent
      key={p.id}
      message={p.message}
      likesCount={p.likesCount}
    />
  ))

  const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    updateNewPostText(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            className={styles.newPostTextArea}
            onChange={onPostChange}
            value={newPostText}
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
