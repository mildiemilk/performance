import React, { Component } from 'react'

class Onclick extends Component {
  handleClick = (value) => () => {
    console.log('value', value)
  }
  render() {
    return (
      <div>
        test
        <button onClick={this.handleClick('ddd')}>Click</button>
      </div>
    )
  }
}

export default Onclick