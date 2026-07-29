import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [captainData, setcaptainData] = useState({})

    const subHandler = (e)=>{
        e.preventDefault()
        setcaptainData({
            email:Email,
            password:Password
        })
        console.log(captainData);
        
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
            <p className='text-center'>New Here ? <Link className='text-blue-600' to='/captain-signup'>Register as a captain</Link></p>
       </div>

       <div>
            <Link to='/login' className='bg-orange-700 flex items-center justify-center text-white rounded px-4 py-2 mb-7 border-1 w-full text-lg font-semibold placeholder:text-base'>Sign in as User</Link>
       </div>
    </div>
  )
}

export default CaptainLogin
