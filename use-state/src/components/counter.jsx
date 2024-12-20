import React from 'react'
import '../App.css';
import { useState } from 'react';
const Counter = () => {
    let [count, setCount] = useState(0);
    
    const add = ()=>{
      setCount( count + 1)
    } 
    const remove = ()=>{
      if (count> 0) 
        setCount( count - 1)
      
    } 
    const reset = ()=>{
      setCount( count = 0)
    } 
  return (

    <div className="counter">
        <h1>Counter : {count} </h1>
      
        <button onClick={add}>Increse</button>
        <button onClick={remove}>Decrease</button>
      <button onClick={reset}>Reset </button>
    </div> 
  )
}

export default Counter