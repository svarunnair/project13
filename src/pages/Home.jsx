import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate=useNavigate()


  const handleLogout=()=>{
    
   window.localStorage.removeItem("token")
    navigate("/signin")

  }
  
  return (
    <div>Home<br/>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home