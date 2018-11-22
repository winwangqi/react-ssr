import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    console.log('clicked')
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        <p>count: {this.state.count}</p>
      </div>
    )
  }
}

export default Counter
