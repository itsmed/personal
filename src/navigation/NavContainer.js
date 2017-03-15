import React, { Component } from 'react';

import NavItem from './NavItem';

class NavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <nav className='nav'>
      <NavItem
        text="Team"
        action={ () => null }
      />
      <NavItem
        text="All Tasks"
        action={ () => null }
      />
      <NavItem
        text="My Tasks"
        action={ () => null }
      />
      <NavItem
        text="Create Tasks"
        action={ () => null }
      />
      <NavItem
        text="Assign Tasks"
        action={ () => null }
      />
    </nav>;
  }
}

export default NavContainer;
