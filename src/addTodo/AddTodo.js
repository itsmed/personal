import React, { Component } from 'react';


class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: '',
    }

    this.setTodo = this.setTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.refs.todoInput.value = '';
    this.props.addTodoItem(this.state.todoItem);
  }

  setTodo() {
    this.setState({
      todoItem: this.refs.todoInput.value
    });
  }

  render() {
    return <div>
      <div>
        <h5>Todo Preview:</h5>
        <p>{ this.state.todoItem }</p>
      </div>
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          ref="todoInput"
          placeholder="Add Todo"
          onKeyUp={ this.setTodo }
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  }
}

const { func } = React.PropTypes;

AddTodo.propTypes = {
  addTodoItem: func,
};

export default AddTodo;
