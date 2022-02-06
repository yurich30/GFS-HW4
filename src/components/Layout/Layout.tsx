import React from 'react';
import { LayoutStyled, LayoutContainer } from './Layout.styled';

interface PropsType {
  children: JSX.Element;
}

const Layout: React.FC<PropsType> = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutStyled>{children}</LayoutStyled>
    </LayoutContainer>
  );
};

export default Layout;
