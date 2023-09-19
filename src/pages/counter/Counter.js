import React from 'react'
import useCounter from '../../component/useCounter'

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);
  //console.log(test)
  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
  )
}

export default Counter