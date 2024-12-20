import React from 'react';
import { useState } from 'react';
import '../App.css';

export const Login = () => {
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [name , setName] = useState('');
    const [age , setAge] = useState('');



  return (
    <div className="login-form">
        <h1>Login Form</h1>
        <div>
        <input 
        placeholder="Enter email"
        value = {email}
        type='text'
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <input 
        placeholder="Enter Password"
        value = {pass}
        type='text'
        onChange={(e) => setPass(e.target.value)}
        />
        </div>
        <div>
        <input 
        placeholder="Enter Full Name"
        value = {name}
        type='text'
        onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
        <input 
        placeholder="Enter Age"
        value = {age}
        type='text'
        onChange={(e) => setAge(e.target.value)}
        />
        </div>

        <div>
      <p>name: {name}</p>
      <p>password: {pass}</p>
      <p>email : {email}</p>
      <p>age : {age}yrs</p>
      </div>

    </div>
  )
}
export default Login;
