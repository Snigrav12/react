import React,{useState,useContext} from 'react'
import { AuthContext } from '../context/Authprovider';

const CreateTask = () => {

  const [userData,setUserData]=useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState('');

  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')

  const [assignTo, setassignTo] = useState('')

  const [category, setcategory] = useState('')

  const [newTask, setnewTask] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
    setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newtask:true,completed:false,failed:false})

    const data=userData
    data.forEach(function (elem){
      if(assignTo == elem.firstname){
         elem.tasks.push(newTask);
         elem.taskNumbers.newtask=elem.taskNumbers.newtask + 1
         console.log(elem);
      }
    })
    setUserData(data)
    

    settaskTitle('');
    setassignTo('');
    setcategory('');
    settaskDescription('');
    settaskDate('');
  }
  return (
<div className='p-2 '>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} id='form' 
        className='flex w-full bg-red-200 items-start justify-between'>
            <h2 className=''>Title Task</h2>
            <input value={taskTitle} onChange={(e)=>{
              settaskTitle(e.target.value);
            }} type="text" placeholder="Make a UI design" />

            <h3>Date</h3>
            <input  value={taskDate} onChange={(e)=>{
              settaskDate(e.target.value);
            }} type="date" />
            <h3>Assign to</h3>
            <input  value={assignTo} onChange={(e)=>{
              setassignTo(e.target.value);
            }} type="text" placeholder='Employee name' />
            <h3>Category</h3>
            <input  value={category} onChange={(e)=>{
              setcategory(e.target.value);
            }} type="text" placeholder='Design' />
            <div className=''>
            <h3> Description</h3>
            <textarea  value={taskDescription} onChange={(e)=>{
              settaskDescription(e.target.value);
            }} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='bg-black text-white rounded-sm mt-2 hover:bg-red-400'>Create Task</button>
        </form>
       </div>
  )
}

export default CreateTask
