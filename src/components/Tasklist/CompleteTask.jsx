import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0  w-[300px] p-5 bg-blue-400 rounded-md'>
    <div className="flex justify-between items-center">
      <h2 className='bg-red-600 text-white px-3 py-1'>{data.category}</h2>
      <h3 className='text-white text-base'>{data.taskDate}</h3>
    </div>
    <h2 className='text-white mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className= ' text-white text-sm mt-2'>{data.taskDescription}</p>
  <div className='mt-2'>
    <button className='w-full text-sm font-medium bg-blue-500'>Completed</button>
  </div>
</div>
  )
}

export default CompleteTask
