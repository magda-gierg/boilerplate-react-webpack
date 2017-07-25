import React from 'react'
import Shape from './Shape'

const App = () => {
  return (
    <div>
      <h1>React development has begun!</h1>
      <Shape thing='shape' showMsg={showMessage}/>
    {/*  // Shape({thing: 'shape'})

    Shape -child component, thing is a key(property of an object), shape is a value
    we are passing data into child component, we can pass strings('shape') but we can also pass arrays, objects, numbers */}
  </div>
  )
}
function showMessage () {
  console.log('This is a message')
}

export default App
