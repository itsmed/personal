import React from 'react';

const NavItem = (props) => {
  return <div onClick={ props.action }>
    { props.text }
  </div>;
};

export default NavItem;
