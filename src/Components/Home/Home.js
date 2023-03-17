import React from 'react'
import Input from '../Input/Input';
import './Home.css';

export default function Home() {
  return (
    <div>
        <div className='whole__container'>
            <div className='feed'>
                <h1>Weather App</h1>
                <div className='input__div'>
                    <Input/>
                </div>
            </div>
        </div>
    </div>
  )
}
