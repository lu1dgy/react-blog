import { addPost, updateNewPostText } from '../../../redux/profile/profile'
import MyPosts from '.'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const MyPostsContainer = () => {
  const dispatch = useDispatch()
  const newPostText = useSelector((state: RootState) => state.profile.newPostText)
  const posts = useSelector((state: RootState) => state.profile.posts)

  const updateText = (text: string) => {
    dispatch(updateNewPostText(text))
  }

  const addNewPost = () => {
    dispatch(addPost())
  }

  return (
    <MyPosts
      newPostText={newPostText}
      posts={posts}
      updateNewPostText={updateText}
      addPost={addNewPost}
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
