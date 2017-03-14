import React, { Component } from 'react';

import TodoItem from '../todoItem/TodoItem';


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  handleTodoClick(ref) {
    const ele = this.refs[ref];
    const blue = {
      color: 'blue',
    };

    const black = {
      color: 'black',
    };
    console.log('clicked', ele.style);
    ele.style.textDecoration = ele.style.textDecoration === '' ? 'line-through' : 'none';
  }

  render() {
    const { todos } = this.props;

    return <div>
      <ul>
      {
        todos.map(todo => <li key={ todo } onClick={ () => this.handleTodoClick(todo) } ref={ todo} > <TodoItem item={ todo } /> </li> )
      }
      </ul>
    </div>;
  }
}

export default TodoList;
