import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage, updateNewMessageText } from '../../redux/dialogs/dialogs'
import { RootState } from '../../redux/store'
import Dialogs from '.'

const DialogsContainer = () => {
  const dispatch = useDispatch()
  const dialogs = useSelector((state: RootState) => state.dialogs)

  const actionSend = () => {
    dispatch(sendMessage())
  }

  const updateText = (text: string) => {
    dispatch(updateNewMessageText(text))
  }

  return (
    <Dialogs
      dialogs={dialogs}
      sendMessage={actionSend}
      updateNewMessageText={updateText}
    />
  )
}

export default DialogsContainer
