import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'
import UserProtectWrapper from './pages/UserProtectWrapper'

const App = () => {

  

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Start></Start>}></Route>

        <Route path='/signup' element={<UserSignup></UserSignup>}></Route>
        <Route path='/login' element={<UserLogin></UserLogin>}></Route>

        <Route path='/captain-login' element={<CaptainLogin></CaptainLogin>}></Route>
        <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}></Route>

        <Route path='/home' element={<UserProtectWrapper><Home></Home></UserProtectWrapper>}></Route>

      </Routes>
    </div>
  )
}

export default App
