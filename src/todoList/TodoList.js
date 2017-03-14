import React, { Component } from 'react';

import TodoItem from '../todoItem/TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;

    return <div>
      <ul>
      {
        todos.map(todo => <li key={ todo } ref={ todo }> <TodoItem item={ todo } /> </li> )
      }
      </ul>
    </div>;
  }
}

export default TodoList;
