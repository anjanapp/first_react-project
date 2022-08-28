import { useState } from 'react'

import React from 'react'

function Counterr() {
    var [counter,setCounter]=useState(0)
    function increment(){
        setCounter(counter+1)  
    }
    function decrement(){
        setCounter(counter-1)
    }
    function reset(){
        // counter=0
        // setCounter(counter)
        setCounter(1)
    }

  return (
    <div>
        <p>the value is {counter}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default Counterr


//function based components