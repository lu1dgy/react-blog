import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src='https://www.creativefabrica.com/wp-content/uploads/2021/07/12/Golden-retriever-svg-file-Dog-svg-Graphics-14607561-2-580x387.jpg'
        alt='postImage'
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
