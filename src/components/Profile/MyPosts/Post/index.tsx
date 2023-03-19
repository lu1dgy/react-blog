import React, { memo } from 'react'
import styles from './Post.module.css'

type PostProps = {
  message: string
  likesCount: number
}
const Post: React.FC<PostProps> = memo(({ message, likesCount }) => {
  return (
    <div className={styles.item}>
      <img
        src='https://www.creativefabrica.com/wp-content/uploads/2021/07/12/Golden-retriever-svg-file-Dog-svg-Graphics-14607561-2-580x387.jpg'
        alt='postImage'
      />
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  )
})

export default Post
