import React from 'react'
import Header from '../../other/Header'
import TaskNumber from '../../other/TaskNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
   <>
     <div className='p-10 bg-zinc-800 h-screen'>
     <Header  data={data}/>
     <TaskNumber data={data}/>
     <TaskList data={data}/>
     </div>
   </>
  )
}

export default EmployeeDashboard
