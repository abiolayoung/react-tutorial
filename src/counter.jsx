import React from 'react'
import { useState } from 'react'

function Counter(){
const [counter, setCounter] = useState(0)

function Increment(){
    setCounter((prev)=> prev + 1)
}

function Decrement(){
    setCounter((prev)=> prev - 1)
}

    return (
        <section className='counter'>
            <div className='display-counter'>{counter}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </section>
    )
}

export default Counter;