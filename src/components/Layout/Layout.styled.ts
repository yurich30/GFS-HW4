import styled from 'styled-components';

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const LayoutStyled = styled.div`
  max-width: 630px;
  width: 100%;
  padding: 42px 21px;
`;
