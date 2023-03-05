import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import store from './redux/store'
import App from './App'
import { Provider } from './StoreContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  rerenderEntireTree()
})

serviceWorker.unregister()
