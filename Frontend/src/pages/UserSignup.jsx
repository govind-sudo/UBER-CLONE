
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [userData, setuserData] = useState({})

    const subHandler = (e)=>{
        e.preventDefault()
        setuserData({
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email:Email,
            password:Password
        })
        console.log(userData);
        
        setfirstname('')
        setlastname('')
        setEmail('')
        setPassword('')
    }
  return (
     <div className='p-7 flex flex-col justify-between h-screen'>
       <div>
        <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/960px-Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={subHandler}>

            <h3 className='text-lg mb-2 font-medium'>What's Your Name</h3>
            <div className='flex gap-2'>
                <input value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} type="text" name="" id="" className='bg-[#eeee] w-1/2 rounded px-4 py-2 mb-7 text-lg placeholder:text-base' placeholder='First Name'/>
                <input value={lastname} onChange={(e)=>{setlastname(e.target.value)}} type="text" name="" id="" className='bg-[#eeee] w-1/2 rounded px-4 py-2 mb-7 text-lg placeholder:text-base' placeholder='Last Name'/>
            </div>

            <h3 className='text-lg mb-2 font-medium'>What's Ur email</h3>
            <input  value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required placeholder='email@example.com' className='bg-[#eeee] rounded px-4 py-2 mb-7  w-full text-lg placeholder:text-base' />

            <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
            <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' name="" id="" className='bg-[#eeee] rounded px-4 py-2 mb-7  w-full text-lg placeholder:text-base' />

            <button className='bg-black text-white rounded px-4 py-2 mb-3 border-1 w-full text-lg font-semibold placeholder:text-base'>Sign UP</button>

        </form>
            <p className='text-center'>Already have an account ? <Link className='text-blue-600' to='/login'>Login Here</Link></p>
       </div>

       <div>
            <p className='text-[12px] leading-tight mb-10 text-gray-500'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
       </div>
    </div>
  )
}

export default UserSignup
