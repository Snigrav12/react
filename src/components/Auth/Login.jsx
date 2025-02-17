import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

const submitHandler=(e) => {
  e.preventDefault()
   handleLogin(email,password)
   setEmail("")
   setPassword("")
}


  return (
    <div id='background' className='flex h-screen w-screen items-center justify-center bg-zinc-700'>
        <div className='bg-pink-200 h-1/2 border-2 border-black p-20 rounded'>
         <form onSubmit={function(e){submitHandler(e)}} className='flex flex-col items-center justify-center'>
            <input value={email} onChange={function(e){setEmail(e.target.value)}} required className='text-black  outline-none bg-transparent border-2 border-emerald-600 rounded py-3 px-5' type='email' placeholder='Email' />
            <input value={password} onChange={function(e){setPassword(e.target.value)}} required className='text-black mt-5 outline-none bg-transparent border-2 border-emerald-600 rounded py-3 px-5' type="Password" placeholder='Password' />
            <button className=' mt-8 text-white outline-none bg-blue-500 border-2  border-black rounded py-3 px-5'>Login</button>
         </form>
         </div>
    </div>
  )
}

export default Login
