import { useDispatch, useSelector } from 'react-redux'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogs'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
  const dispatch = useDispatch()
  const dialogs = useSelector((state) => state.dialogs)

  const sendMessage = () => {
    dispatch(sendMessageCreator())
  }

  const updateNewMessageText = (text) => {
    dispatch(updateNewMessageTextCreator(text))
  }

  return (
    <Dialogs
      dialogs={dialogs}
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
    />
  )
}

export default DialogsContainer

// import { connect } from 'react-redux'
// import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogs'
// import Dialogs from './Dialogs'

// //It is legacy desision its better to use useSelector, but I learn it to support old apps
// const mapStateToProps = (state) => {
//   return {
//     dialogs: state.dialogs,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: () => {
//       dispatch(sendMessageCreator())
//     },
//     updateNewMessageText: (text) => {
//       dispatch(updateNewMessageTextCreator(text))
//     },
//   }
// }
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// export default DialogsContainer
