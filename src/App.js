import React from 'react'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Form } from './components/Form'

function App() {
  return (
    <BrowserRouter>
      <h1>hola desde la app</h1>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Form />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
