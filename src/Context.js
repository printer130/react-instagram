import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState('false')
  const obj = [
    {
      id: 1,
      nombre: 'leo',
    },
    {
      id: 2,
      nombre: 'leoo',
    },
    {
      id: 3,
      nombre: 'leooo',
    },
  ]
  const value = {
    test: 'somos el values',
    isAuth,
    obj,
    hola: 'hoola',
    activateAuth: () => setIsAuth('true'),
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer,
}
