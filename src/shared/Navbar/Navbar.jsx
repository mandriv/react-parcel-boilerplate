// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '/../public/react-icon.svg';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 0.25em;
  flex: 1;
  background-color: ${props => props.theme.primaryColor};
`;

const Logo = styled.img`
  display: inline-block;
  flex: 0;
  width: auto;
  height: 100%;
`;

const NavList = styled.ul`
  display: inline-block;
  flex: 1;
  list-style: none;
`;

const NavItem = styled.li`
  display: inline;
  padding: 1em;
  & > a {
    font-size: 1rem;
    text-transform: uppercase;
    color: ${props => props.theme.contentColorInverted};
    text-decoration: none;
  }
  & > a:hover {
    border-bottom: 1px solid ${props => props.theme.accentColor};
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo src={logo} alt="react-logo" />
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}
