import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dialogs from '.'
import { RootState } from '../../redux/store'
import { sendMessage, updateNewMessageText } from '../../redux/dialogs/dialogs'

const DialogsContainer: React.FC = () => {
  const dispatch = useDispatch()
  const dialogs = useSelector((state: RootState) => state.dialogs)

  const handleSendMessage = () => {
    dispatch(sendMessage())
  }

  const handleUpdateNewMessageText = (text: string) => {
    dispatch(updateNewMessageText(text))
  }

  return (
    <Dialogs
      dialogs={dialogs}
      sendMessage={handleSendMessage}
      updateNewMessageText={handleUpdateNewMessageText}
    />
  )
}

export default DialogsContainer
