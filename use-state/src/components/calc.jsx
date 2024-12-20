import React from 'react';
import '../App.css';
import { useState } from 'react';

export const Calc = () => {
   
    const [num1 , setNum1] = useState();
    const [num2 , setNum2] = useState();
    const [add, setAdd] = useState();
    const [sub, setDiff] = useState();
    const [mul ,setMul] = useState();
    const [divide , setDivide] = useState();

    const Add = () =>{
        setAdd(Number(num1) + Number(num2))
    }

    const Sub = () =>{
        setDiff(Number(num1) - Number(num2))
    }

    const Mul = () =>{
        setMul(Number(num1) * Number(num2))
    }
    const Divide = () =>{
        setDivide(Number(num1) / Number(num2))
    }

  return (
    <div className="calculator">
        <h1>Calculator</h1>

        <div>
            <input
             type="number"
             value={num1} 
             onChange = {(e) => setNum1(e.target.value)} 
             />

            <input
             type="number"
             value={num2} 
             onChange = {(e) => setNum2(e.target.value)} 
             />
        </div>

        <div>
            <button onClick={Add}> + </button>
            <button onClick={Sub}> - </button>
            <button onClick={Mul}> x </button>
            <button onClick={Divide}> / </button>
        </div>

        <div>
            <h2>{add}</h2>
            <h2>{sub}</h2>
            <h2>{mul}</h2>
            <h2>{divide}</h2>
        </div>

    </div>
    
  )
}
export default Calc;
