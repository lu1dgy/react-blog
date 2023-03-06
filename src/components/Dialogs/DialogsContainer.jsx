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
      newMessageText={dialogs.newMessageText}
      dialogs={dialogs}
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
    />
  )
}

export default DialogsContainer
