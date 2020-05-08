import React, { useReducer } from 'react'
import './test.css'

function init(initialValue) {
  return { count: 0 }
}
function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return {
        count: state.count + 1,
      }
    case 'dec':
      return {
        count: state.count - 1,
      }
    case 'reset':
      console.log(action)
      return init(action.payload)
  }
}

export const Test = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>reset</button>
      <div className='dark-mode'>
        <p className='dark-mode-title'>
          <input className='checkbox' type='checkbox' name='checkbox' id='checkbox' />
          <label className='switch' htmlFor='checkbox'></label>
        </p>
      </div>
    </div>
  )
}
