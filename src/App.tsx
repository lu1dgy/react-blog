import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Profile from './components/Profile'
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
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/users'
            element={<UsersContainer />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
