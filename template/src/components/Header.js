import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'preact-router/match';

export default () => (
  <Nav tabs>
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/">
        Home
      </Link>
    </NavItem>
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/profile">
        Me
      </Link>
    </NavItem>
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/profile/john">
        John
      </Link>
    </NavItem>
  </Nav>
);
