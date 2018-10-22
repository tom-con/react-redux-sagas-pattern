import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavItemContainer extends Component {

  render() {
    const { to, text, inactiveStyle, activeStyle } = this.props;
    return (
      <NavLink
        to={to}
        style={inactiveStyle}
        activeStyle={activeStyle}
      >
        {text}
      </NavLink>
    );
  }
}

export default NavItemContainer;