import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Todo from './Components/shouldComponentUpdate'
class App extends Component {
  state = {
    users: []
  }

  addNewUser = () => {
    /**
     *  OfCourse not correct way to insert
     *  new user in user list
     */
    const users = this.state.users;
    users.push({
      userName: "robin",
      email: "email@email.com"
    });
    console.log('users:', users)
    // this.setState({ users: users });
  }
  render() {
    console.log('user', this.state.users)
    return (
      <div className="">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            {this.state.users}
          </a>
          <Todo />
        </header>
        <button onClick={this.addNewUser}> test </button>
      </div>
    )
  }
}

export default App
