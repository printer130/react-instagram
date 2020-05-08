import React, { useState } from 'react'
import { Fieldset } from './styles'
import { useInputValues } from '../../hooks/useInputValues'

export const LoginForm = () => {
  const username = useInputValues('')
  const password = useInputValues('')
  return (
    <form action='http://localhost:3000/api/auth/login' method='post'>
      <Fieldset>
        <legend>Login</legend>
        <div>
          <label>Username</label>
          <input type='text' name='username' {...username} />
          <label htmlFor=''>Password</label>
          <input type='password' name='password' {...password} />
        </div>
        <button type='submit'>GO!</button>
      </Fieldset>
    </form>
  )
}
