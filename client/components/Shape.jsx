import React from 'react'

{/* Stateless -> functional component
  stateless components just render their props
  props is an single object, is an input to the function, are passed in and they not change

  const Shape = (props) => {
  return (
  <h1>This is a {props.thing}</h1>
  )}
  */}

  {/*  Statefull */}
  class Shape extends React.Component {
    constructor (props) {
      super(props)
      {/*} super run the constructor of the parents */}
      this.radius = 10
      {/*we can add as many properties as we want*/}
      this.state = {
        happy: true
        // the way we triggle of a component to rerender itself is by changing the state; the state is to change and when it changes it rerender the component, automatically calls the render function again
      }
      this.changeHappy = this.changeHappy.bind(this)
    }

    changeHappy () {
      const isHappy = !this.state.happy
      this.setState({happy: isHappy})
    }



    render () {
      return (
        <div onClick={this.changeHappy} onMouseOver={() => this.props.showMsg()}>
          {/*  when we will click we want to call function changeHappy   */}
          <h1>This is a {this.props.thing}</h1>
          {/*   this is refering to the current object (it can refer to itself when the object is created)   */}
          <p>Happy: {this.state.happy.toString()}</p>
        </div>
      )
    }
  }

  {/*  const shape = new Shape()

    const shape = {
    radius:10,
    props: {
    thing: 'shape'
    }
    }
    */}



    export default Shape
