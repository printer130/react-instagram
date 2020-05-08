import React, { useState } from 'react'
import { Fieldset, Div } from './styles'
import { useInputValues } from '../../hooks/useInputValues'
import { FaRegSmileBeam } from 'react-icons/fa'
// import './style.css'

export const Form = () => {
  const username = useInputValues('')
  const name = useInputValues('')
  const password = useInputValues('')

  const handleClic = (e) => {
    e.preventDefault()
    console.log('clic')
  }
  return (
    <div>
      <form action='http://localhost:3000/api/user' method='post' onSubmit={handleClic}>
        <Fieldset>
          <legend>Registrarse</legend>
          <label>Name</label>
          <div>
            <FaRegSmileBeam />
            <input autoFocus placeholder='Name' name='name' type='text' {...name} />
          </div>
          <label>Username</label>
          <div>
            <FaRegSmileBeam />
            <input
              autoFocus
              placeholder='Username'
              name='username'
              type='text'
              {...username}
            ></input>
          </div>

          <label>Password</label>
          <div>
            <FaRegSmileBeam />
            <input autoFocus placeholder='Password' name='password' type='text' {...password} />
          </div>
          <button type='submit'>Aceptar</button>
        </Fieldset>
      </form>
      <br />
    </div>
  )
}
