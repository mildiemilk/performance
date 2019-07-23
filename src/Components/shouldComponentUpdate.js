import React from 'react'

class Todo extends React.Component {

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        console.log('setting state');
        return { unseen: "does not display" }
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
    return (<div>Re-render</div>);
  }
}

export default Todo