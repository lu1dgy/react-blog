import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import Header from './components/Header'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

const App: React.FC = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route
            path='/dialogs/*'
            element={<DialogsContainer />}
          />
          <Route
            path='/profile/:id'
            element={<ProfileContainer />}
          />
          <Route
            path='/users'
            element={<UsersContainer />}
          />
          <Route
            path='*'
            element={<div style={{ padding: '50px', fontSize: '50px' }}>This url is not valid</div>}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
