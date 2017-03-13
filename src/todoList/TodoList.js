import React, { Component } from 'react';

import TodoItem from '../todoItem/TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    console.log('todos', todos, Array.isArray(todos), todos.map)
    return <div>
      <ul>
      {
        todos.map(todo => <li key={todo}> <TodoItem item={todo} /> </li> )
      }
      </ul>
    </div>;
  }
}

export default TodoList;
