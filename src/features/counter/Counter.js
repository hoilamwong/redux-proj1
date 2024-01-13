import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

export default function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h3> Counter </h3>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button> <br/>
      {count} <br/>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  )
}
