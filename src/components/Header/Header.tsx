import ThemeToggler from '../ThemeToggler/ThemeToggler';
import React from 'react';
import { HeaderContainer, HeaderTitle } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Overinvested</HeaderTitle>
      <ThemeToggler />
    </HeaderContainer>
  );
};

export default Header;
