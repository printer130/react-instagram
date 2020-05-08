import React from 'react'
import Context from '../../Context'

export const About = () => (
  <div>
    <h1>About</h1>
    <Context.Consumer>
      {({ obj }) =>
        obj ? (
          <>
            {obj.map((item) => (
              <div key={item.id}>{item.nombre}</div>
            ))}
          </>
        ) : (
          'nop'
        )
      }
    </Context.Consumer>
    <div>asdasd</div>
  </div>
)
