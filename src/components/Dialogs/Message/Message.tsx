import React from 'react'
import styles from './../Dialogs.module.css'

type MessageProps = {
  message: string
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return <div className={styles.dialog}>{message}</div>
}

export default Message
