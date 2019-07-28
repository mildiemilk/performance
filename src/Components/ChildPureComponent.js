import React, { Component, PureComponent } from 'react'

class DumbComponent extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.unseen === this.props.unseen) {
      return false
    }
    return true
  }
  // `Pure component` and `shouldComponentUpdate` shallow compare props
  // when props don't change. it will not rerender
  // if props change but props is complex data structures
  // it may miss some prop changes and not update your components.
  render() {
    console.log('child render')
    const { unseen } = this.props
    return <div> {unseen && unseen}</div>
  }
}

export default DumbComponent
