import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <input
        type="text"
        placeholder="Grocery List, maybe?"
      />
    </div>;
  }
}

export default AddTask;
