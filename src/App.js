import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Dialogs from './components/Dialogs/Dialogs'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route
            path='/dialogs/*'
            element={
              <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
