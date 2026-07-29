import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen pt-8 w-full flex justify-between flex-col bg-cover bg-center bg-[url(https://i.pinimg.com/1200x/b5/24/d3/b524d348bd381ce3db9537c087034e4c.jpg)]'>
        <img className='w-20 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/960px-Uber_logo_2018.svg.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-extrabold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 px-5 text-xl font-bold rounded mt-5'>Continue</Link>
            </div>
      </div>
    </div>
  )
}

export default Home