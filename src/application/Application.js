import React, { Component } from 'react';
import { auth, database }  from '../firebase';

import CurrentUser from '../user/CurrentUser';
import SignIn from '../signIn/SignIn';
import TodoList from '../todoList/TodoList';
import AddTodo from '../addTodo/AddTodo';
import NavContainer from '../navigation/NavContainer';

import './Application.css';


class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      allTodos: ['1', '2'],
    };

    this.addTodoItem = this.addTodoItem.bind(this);
  }

  componentWillMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('auth changed', currentUser);
      this.setState({ currentUser });
    });
  }

  addTodoItem(todo) {
    this.setState({
      allTodos: [...this.state.allTodos, todo]
    })
  }

  render() {
    const { currentUser } = this.state;

    return <div className="Application">
      <header className="Application--header">
        <NavContainer />
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
        <AddTodo 
          addTodoItem={ this.addTodoItem }
        />
      </div>
      <div>
        <TodoList
          todos={ this.state.allTodos }
        />
      </div>
    </div>;
  }
}

export default Application;
