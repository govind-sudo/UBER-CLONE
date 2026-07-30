
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import {UserDataContext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserLogin =  () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const navigate = useNavigate()
    const {User, setUser} = useContext(UserDataContext)

    const subHandler = async (e)=>{
        e.preventDefault()
        const userdata = {
            email:Email,
            password:Password
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userdata)
        
        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }

        
        setEmail('')
        setPassword('')
    }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
       <div>
        <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/960px-Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={subHandler}>

            <h3 className='text-lg mb-2 font-medium'>What's Ur email</h3>
            <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required placeholder='email@example.com' className='bg-[#eeee] rounded px-4 py-2 mb-7  w-full text-lg placeholder:text-base' />

            <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
            <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' name="" id="" className='bg-[#eeee] rounded px-4 py-2 mb-7  w-full text-lg placeholder:text-base' />

            <button className='bg-black text-white rounded px-4 py-2 mb-3 border-1 w-full text-lg font-semibold placeholder:text-base'>Login</button>

        </form>
            <p className='text-center'>New Here ? <Link className='text-blue-600' to='/signup'>Create new Account</Link></p>
       </div>

       <div>
            <Link to='/captain-login' className='bg-green-400 flex items-center justify-center text-white rounded px-4 py-2 mb-7 border-1 w-full text-lg font-semibold placeholder:text-base'>Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin
