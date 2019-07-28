import React from 'react'
import ChildPureComponent from './ChildPureComponent'
class Todo extends React.Component {
  state = {
    unseen: '',
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        console.log('setting state');
        return {
          unseen: {
            complex: 'test'
          }
        }
      });
    }, 5000);
  }

  // shouldComponentUpdate(nextProps) {
  //   const differentTitle = this.props.title !== nextProps.title;
  //   const differentDone = this.props.done !== nextProps.done
  //   return differentTitle || differentDone;
  // }

  render() {
    console.log('render called');
    return (<div>
      Re-render
      <ChildPureComponent unseen={this.state.unseen} />
    </div>);
  }
}

export default Todo