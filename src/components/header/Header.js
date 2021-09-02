import React from 'react';
import Container, { Logo } from './HeaderStyles';
// import Logo from '../../img/logo.png';

function Header() {
  return (
    <Container>
      <Logo src="/img/logo.png" />
    </Container>
  );
}
export default Header;
