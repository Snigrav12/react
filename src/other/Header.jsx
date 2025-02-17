import React,{useState} from 'react'
import { setlocalstorage } from '../utils/localstorage'

const Header = () => {

  // const [username, setusername] = useState(null)

  // if(!data){
  //   setusername('Admin');
  // }
  // else{
  //   setusername(data.firstname)
  // }

  const logOut = ()=>{
    localStorage.setItem('loggedInUser','');
   window.location.reload()
  }
  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl'>Hello, <br/><span className='text-3xl'>😊</span></h1>
      <button onClick={logOut} className=' bg-red-600 text-white px-3 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header
