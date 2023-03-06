import { addPostCreator, updateNewPostTextCreator } from '../../../redux/reducers/profile'
import MyPosts from './MyPosts'
import { useDispatch, useSelector } from 'react-redux'

const MyPostsContainer = () => {
  const dispatch = useDispatch()
  const newPostText = useSelector((state) => state.profile.newPostText)
  const posts = useSelector((state) => state.profile.posts)

  const updateNewPostText = (text) => {
    dispatch(updateNewPostTextCreator(text))
  }

  const addPost = () => {
    dispatch(addPostCreator())
  }

  return (
    <MyPosts
      newPostText={newPostText}
      posts={posts}
      updateNewPostText={updateNewPostText}
      addPost={addPost}
    />
  )
}

export default MyPostsContainer

// import { addPostCreator, updateNewPostTextCreator } from '../../../redux/reducers/profile'
// import MyPosts from './MyPosts'
// import { connect } from 'react-redux'

// //It is legacy desision its better to use useSelector, but I learn it to support old apps

// const mapStateToProps = (state) => {
//   return {
//     newPostText: state.profile.newPostText,
//     posts: state.profile.posts,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostTextCreator(text))
//     },
//     addPost: () => {
//       dispatch(addPostCreator())
//     },
//   }
// }
// const MyPostsContainter = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

// export default MyPostsContainter
