import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
            <div className=' flex-shrink-0  w-[300px] p-5 bg-red-400 rounded-md'>
          <div className="flex justify-between items-center">
            <h2 className='bg-red-600 text-white px-3 py-1'>{data.category}</h2>
            <h3 className='text-white text-base'>{data.taskDate}</h3>
          </div>
          <h2 className='text-white mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
          <p className= ' text-white text-sm mt-2'>{data.taskDescription}</p>
          <div className='flex justify-between mt-4'>
        <button className='bg-green-500 rounded font-medium py-1 px-2 text-sm'>Mark as completed</button>
        <button className='bg-red-500 rounded font-medium py-1 px-2 text-sm'>Mark as failed</button>
    </div>
    </div>

    </div>
  )
}

export default AcceptTask
