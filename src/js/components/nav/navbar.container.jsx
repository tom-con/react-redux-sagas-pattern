import React, { Component } from 'react';

import NavBar from './navbar.presenter.jsx'
import NavItem from './navitem.container.jsx'

class NavBarContainer extends Component {

  render() {
    return (
      <NavBar>
        <NavItem
          to="/todo"
          text="Todo"
        />
        <NavItem
          to="/progress"
          text="Progress"
        />
        <NavItem
          to="/weather"
          text="Weather"
        />
      </NavBar>
    );
  }
}

export default NavBarContainer;