import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'

const App = () => {

  

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/signup' element={<UserSignup></UserSignup>}></Route>
        <Route path='/login' element={<UserLogin></UserLogin>}></Route>

        <Route path='/captain-login' element={<CaptainLogin></CaptainLogin>}></Route>
        <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}></Route>

      </Routes>
    </div>
  )
}

export default App
