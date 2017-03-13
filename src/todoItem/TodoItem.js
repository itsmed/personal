import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    console.log('item', item);
    return <div>
      { item }
    </div>;
  }
}

export default TodoItem;
