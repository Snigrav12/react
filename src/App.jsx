import React, {useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalstorage, setlocalstorage } from './utils/localstorage'
import { AuthContext } from './context/Authprovider'



const App = () => {

  const [user, setuser] = useState(null)
  const [loggedinuserdata, setloggedinuserdata] = useState(null)
  const [userData,setUserData]=useContext(AuthContext);

  useEffect(() => {
    if(userData){
    const  loggedInUser=localStorage.getItem("loggedInUser");
      if(loggedInUser){
       const userData=JSON.parse(loggedInUser);
       setuser(userData.role)
       setloggedinuserdata(userData.data)
      }
    }
  }, [])
  

  const handleLogin =(email,password)=>{
    if(email=="admin@me.com" && password=="123"){
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee=userData.find((e)=>email === e.email && password=== e.password)
      if (employee){
        setuser('employee')
        setloggedinuserdata(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }  
    }
    else{
      alert('Invalid Credentials');
    }
  }


  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:''}
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ?<EmployeeDashboard data={loggedinuserdata} />:null)}

    </>
  )
}

export default App

