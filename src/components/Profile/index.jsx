import React from 'react';
import MyPosts from './MyPosts';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <section className={style.content}>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
