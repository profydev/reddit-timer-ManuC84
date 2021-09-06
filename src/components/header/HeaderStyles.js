import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as ImportedLogo } from '../../img/logo.svg';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 80px 0 80px;
`;

export const Logo = styled(ImportedLogo)`
  display: block;
  width: 150px;
  height: 36px;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 19px;
  width: 261px;
  padding-left: 2px;
  padding-top: 1px;
`;

export const NavLink = styled(UnstyledLink)`
  font-family: 'Montserrat';
  font-weight: 400;
  line-height: 19.5px;
  text-align: right;
  font-size: 16px;
`;

export default Container;
