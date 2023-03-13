import { DialogsState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: DialogsState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ],
  newMessageText: '',
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    updateNewMessageText: (state, action: PayloadAction<string>) => {
      state.newMessageText = action.payload
    },
    sendMessage: (state) => {
      const messageText = state.newMessageText
      state.newMessageText = ''
      state.messages.push({ id: 6, message: messageText })
    },
  },
})

export const { updateNewMessageText, sendMessage } = dialogsSlice.actions

export default dialogsSlice.reducer
