import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
    <section>
        <h2>
            <button onClick={()=>dispatch(increment())}>+</button>
            {count}
            <button onClick={()=>dispatch(decrement())}>-</button>  
        </h2>
        <h2>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </h2>
    </section>
  )
}

export default Counter
