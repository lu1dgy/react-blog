import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import store from './redux/state'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>
  )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

serviceWorker.unregister()
