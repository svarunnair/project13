
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postSignup } from '../redux/authData/authAction'

function Signup() {

    const signup=useSelector((store)=>store.authData.signupData)
   
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
    

console.log("signup",signup)

const handleName=(e)=>{
    let value=e.target.value 
    setName(value)
}
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
        name:name,
        email:email,
        password:password
    }
    dispatch(postSignup(data))
    navigate('/signin')
}
const handleClick=()=>{
    navigate('/signin')
}




  return (

    <div><b>Signup</b><br/>
        <input onChange={handleName} placeholder='user name'/><br/>
        <input onChange={handleEmail} placeholder='Email id'/><br/>
        <input onChange={handlePassword} placeholder='Password'/><br/>
        <button onClick={handleSubmit}>Submit</button><br/>
        <h6><text onClick={handleClick}>For Signin</text></h6>
    </div>
  )
}

export default Signup



