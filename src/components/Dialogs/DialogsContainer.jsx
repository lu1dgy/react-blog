import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogs'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogs
        const sendMessage = () => {
          store.dispatch(sendMessageCreator())
        }
        const onNewMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text))
        }
        return (
          <Dialogs
            sendMessage={sendMessage}
            updateNewMessageText={onNewMessageChange}
            dialogs={state}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
