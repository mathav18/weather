import React, { useEffect, useRef, useState } from 'react'
import Err from '../Err/Err';
import Print from '../Print/Print';
import './Input.css';

export default function () {

const inp=useRef(null);
const apiKey = '87016880f66c13823a372f2f00ea34f8';
const[data,setData]=useState('india');
const[val,setval]=useState(0);
const [err,setErr]=useState(false);



const handleChange=()=>{

    inp.current.value?setData(inp.current.value):setData("india")
  }
useEffect(()=>{


   const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiKey}`;
    fetch(url)
    .then((res)=>{ return res.json() })

    .then((result)=>{ setval(result)} )
 
},[data])







  return (
    <div>

    <div className='input_parent'>
        <input type={'text'} placeholder={'Enter your city'} ref={inp}></input>
        <button onClick={handleChange}>Search</button>
    </div>

       {
            val?<Print getWeatherData={val}/>:null
        }

    </div>
  )
}
