export interface Dialog {
  id: number
  name: string
}

export interface Message {
  id: number
  message: string
}

export interface DialogsState {
  dialogs: Dialog[]
  messages: Message[]
  newMessageText: string
}

export interface Dialogs {
  dialogs: Dialog[]
  messages: Message[]
  newMessageText: string
}
