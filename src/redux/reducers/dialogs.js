const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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

export const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      }

    case SEND_MESSAGE:
      const messageText = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 6, message: messageText }],
      }

    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})
