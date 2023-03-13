import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogsState } from '../../redux/dialogs/types'

type UsersBlockProps = {
  dialogs: DialogsState
  sendMessage: Function
  updateNewMessageText: Function
}

const Dialogs: React.FC<UsersBlockProps> = ({ dialogs, sendMessage, updateNewMessageText }) => {
  const dialogsElements = dialogs.dialogs.map((d) => (
    <DialogItem
      key={d.id}
      name={d.name}
      id={d.id}
    />
  ))
  const messagesElements = dialogs.messages.map((m, i) => (
    <Message
      key={i}
      message={m.message}
    />
  ))

  const onSendMesageCLick = () => {
    sendMessage()
  }
  const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    updateNewMessageText(text)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={dialogs.newMessageText}
              onChange={onNewMessageChange}
              placeholder='Enter message'></textarea>
          </div>
          <div>
            <button onClick={onSendMesageCLick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
