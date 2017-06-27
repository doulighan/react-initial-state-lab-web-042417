import React from 'react'
import ReactDOM from 'react-dom'

class Bomb extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render () {
    var string = this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!"
    return ( 
      <div>
        {string}
      </div>
    )
  }
}

export default Bomb 