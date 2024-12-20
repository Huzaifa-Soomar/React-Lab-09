import React from 'react';
import '../App.css';
import { useState } from 'react';

export const Cart1 = () => {
    let [tomato, setTomato] = useState(0);
    let [carrot, setCarrot] = useState(0);
    let [onion, setOnion] = useState(0);
    let[total , setTotal] = useState(0);

    const total_cost = () =>{
        setTotal(total = (tomato *140) + (carrot *40) + (onion *150)  )
    }
    let tomato_total = tomato*140;
    let carrot_total = carrot*40;
    let onion_total = onion*150;

    const remove_tomato = () =>{
        if (tomato > 0) {
            setTomato(tomato-1)
        }
    }

    const remove_carrot = () =>{
        if (carrot > 0) {
            setCarrot(carrot-1)
        }
    }

    const remove_onion = () =>{
        if (tomato > 0) {
            setOnion(onion-1)
        }
    }

  return (
    <div className="cart">
        <h1>Cart ( Vegetables) 🥗 </h1>

        <h5>Tomato 🍅 (toamto : 140$ per KG) : {tomato} | Total = {tomato_total} </h5>
        <h5>Carrot 🥕 (carrot : 40$ per KG) : {carrot}  | Total = {carrot_total} </h5>
        <h5>Onion 🧅 (onion : 150$ per KG) : {onion}    | Total = {onion_total} </h5>
        <h5>Total : {total} $ </h5>


        <button onClick={() => setTomato(tomato + 1) }> Add Tomato 🍅 </button>
        <button onClick={() => setCarrot(carrot + 1) }> Add Carrot 🥕 </button>
        <button onClick={() => setOnion(onion + 1) }> Add Onion 🧅 </button>

        <button onClick={remove_tomato}> Remove Tomato 🍅  </button>
        <button onClick={remove_carrot}> Remove Carrot 🥕  </button>
        <button onClick={remove_onion}> Remove Onion 🧅  </button>
        <button onClick={total_cost}> Total</button>






    </div>
  )
}
export default Cart1;