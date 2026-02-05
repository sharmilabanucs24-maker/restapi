import React from 'react'
import { useState } from 'react'
import axios from "axios"
function AddUser() {
    const  users={
        name:"",
        email:"",
        address:""
    }
    const[user,setUser]=useState(users);
const inputHandler = (e) =>{
    const{name,value }=e.target;
    setUser({...user, [name]: value });
};
const submitForm =(e)=>{
    e.preventDefault();
    console.log(user)
    axios.post("http://localhost:8009/api/user",user).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

  return (
    <div>
        <form onSubmit={submitForm}>
      <input type='text'
      id='name'
      onChange={inputHandler}
      name='name'
      autoComplete='off'
      placeholder='enter your name'
      />
      <input type='text'
      id='email'
      onChange={inputHandler}
      name='email'
      autoComplete='off'
      placeholder='enter your email'
      />
      <input type='text'
      id='address'
      onChange={inputHandler}
      name='address'
      autoComplete='off'
      placeholder='enter your address'
      />
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default AddUser
