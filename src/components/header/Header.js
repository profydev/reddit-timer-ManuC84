import React from 'react';
import { Link } from 'react-router-dom';
import Container, { Logo, NavBar, NavLink } from './HeaderStyles';
// import Logo from '../../img/logo.png';

function Header() {
  return (
    <Container>
      <Link to={{ pathname: '/' }}>
        <Logo src="/img/logo.png" />
      </Link>
      <NavBar>
        <NavLink href="/search?=javascript">Search</NavLink>
        <NavLink href="#how-it-works">How it works</NavLink>
        <NavLink href="#about">About</NavLink>
      </NavBar>
    </Container>
  );
}
export default Header;
