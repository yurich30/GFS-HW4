import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
`;
