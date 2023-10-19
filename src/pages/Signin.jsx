import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postSignin } from '../redux/authData/authAction'

function Signin() {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()



  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
}
const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
}
const handleSubmit=()=>{
    let data={
        email:email,
        password:password
    }
    dispatch(postSignin(data))
    navigate('/home')
}
const handleClick=()=>{
  navigate('/signup')
}


  return (
    <div><b>Signin</b><br/>

        <input onChange={handleEmail} placeholder='Email id'/><br/>
        <input onChange={handlePassword} placeholder='Password'/><br/>
        <button onClick={handleSubmit}>Submit</button><br/>
       <h6><text onClick={handleClick}>For Signup</text></h6> 
    </div>
  )
}

export default Signin