import styled from 'styled-components';

export const BlogListStyled = styled.div`
  color: ${(props) => props.theme.text};
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

export const ArticleTitle = styled.a`
  color: ${(props) => props.theme.textLink};
  font-size: 28px;
  text-decoration: none;
  margin-top: 56px;
  margin-bottom: 7px;
`;

export const ArticleSmall = styled.small`
  font-size: 12px;
  line-height: 16px;
`;

export const ArticleDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 28px;
`;
