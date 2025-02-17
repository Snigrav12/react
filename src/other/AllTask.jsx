import React, { useContext } from 'react'
import { AuthContext } from '../context/Authprovider'

const AllTask = ({data}) => {
const [userData,setUserData]=useContext(AuthContext);

  return (

    <div className='p-5 mt-5 h-60 overflow-auto rounded  '>
      <div className="bg-red-400 text-white py-2 px-4 mb-2 flex justify-between">
            <h2 className='w-1/5 bg-red-400'>Employee Name</h2>
            <h3 className='w-1/5 bg-red-400'>New Task</h3>
            <h5 className='w-1/5 bg-red-400'>Active Task</h5>
            <h5 className='w-1/5 bg-red-400'>Completed</h5>
            <h5 className='w-1/5 bg-red-400'>Failed</h5>
            </div>
      {userData.map(function(e,idx){
           return <div key={idx} className="text-lg font-medium bg-red-400 py-2 px-4 mb-2 flex justify-between">
            <h2 className='text-lg font-medium w-1/5 bg-red-400'>{e.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{e.taskNumbers.newtask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{e.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{e.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{e.taskNumbers.failed}</h5>
        </div>
       })}
    </div>
  )
}

export default AllTask
