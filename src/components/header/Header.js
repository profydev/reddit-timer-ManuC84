import React from 'react';
import { Link } from 'react-router-dom';
import Container, { Logo, NavBar, NavLink } from './HeaderStyles';
// import Logo from '../../img/logo.png';

function Header() {
  return (
    <Container>
      <Link to={{ pathname: '/' }}>
        <Logo />
      </Link>
      <NavBar>
        <NavLink to={{ pathname: '/search/javascript' }}>Search</NavLink>
        <NavLink to={{ pathname: '/#how-it-works' }}>How it works</NavLink>
        <NavLink to={{ pathname: '/#about' }}>About</NavLink>
      </NavBar>
    </Container>
  );
}
export default Header;
