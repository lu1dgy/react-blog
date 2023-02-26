import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post like={2} message={'post1'} />
        <Post like={4} message={'post12'} />
        <Post like={52} message={'post121231'} />
      </div>
    </div>
  );
};

export default MyPosts;
