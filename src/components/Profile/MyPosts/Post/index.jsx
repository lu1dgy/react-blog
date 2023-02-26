import React from 'react';
import style from './Post.module.css';

const Post = ({ like, message }) => {
  return (
    <div className={style.post}>
      <img
        className={style.image}
        src='https://e3.365dm.com/21/07/1600x900/skynews-boeing-737-plane_5435020.jpg?20210702173340'
        alt='post'
      />
      <p>{message}</p>
      <span>likes: {like}</span>
    </div>
  );
};

export default Post;
