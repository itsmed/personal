import React, { Component } from 'react';
import { auth, database } from '../firebase';

import CurrentUser from '../currentUser/CurrentUser';
import SignIn from '../signIn/SignIn';
import TodoList from '../todoList/TodoList';

import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      allTodos: ['1', '2'],
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('auth changed', currentUser);
      this.setState({ currentUser });
    });
  }

  render() {
    const { currentUser } = this.state;

    return <div className="Application">
      <header className="Application--header">
        <h1>Our Todo List</h1>
      </header>
      <div>
        { /* alternative to a ternary, single version! */ } 
        { !currentUser && <SignIn /> }
        {
          currentUser &&
          <div>
            <CurrentUser user={currentUser} /> 
          </div>
        }
      </div>
      <div>
        <TodoList todos={this.state.allTodos} />
      </div>
    </div>;
  }
}

export default Application;