import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  const state = props.dialogs
  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem
      key={d.id}
      name={d.name}
      id={d.id}
    />
  ))
  const messagesElements = state.messages.map((m, i) => (
    <Message
      key={i}
      message={m.message}
    />
  ))

  const onSendMesageCLick = () => {
    props.sendMessage()
  }
  const onNewMessageChange = (e) => {
    const text = e.target.value
    props.updateNewMessageText(text)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={state.newMessageText}
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
