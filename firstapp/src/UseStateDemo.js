import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const UseStateDemo = () => {
  const [count, setCount]=useState(0)
  const incrementCouner = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1)
  }
  return (    
    <>
        <Button onClick={() => incrementCouner()}> + </Button>
        <span>{count}</span>
        <Button onClick={() => decrementCounter()}>-</Button>
    </>
 )
}

export default UseStateDemo
