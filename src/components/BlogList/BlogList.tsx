import {
  Article,
  ArticleDescription,
  ArticleSmall,
  ArticleTitle,
  BlogListStyled,
} from './BlogList.styled';

const articlesList = [
  {
    id: 0,
    header:
      '1 Social Media Stock Better Than DWAC That Investors Can Buy Today',
    date: 'FEB 4, 2022',
    estimatedTime: '10 minutes',
    shortDescription:
      'While DWAC is a speculative bet for investors, Meta Platforms is a distinguished player in the social media segment and a low-risk buy.',
  },
  {
    id: 1,
    header: 'Is Lightspeed Commerce A Good Investment?',
    date: 'FEB 4, 2022',
    estimatedTime: '10 minutes',
    shortDescription:
      'This company posted fantastic quarterly results but upon closer inspection, not all is as it seems, so is Lightspeed a good investment?',
  },
  {
    id: 2,
    header: 'Snap and Pinterest Soar Following Promising Earnings Reports',
    date: 'FEB 4, 2022',
    estimatedTime: '10 minutes',
    shortDescription:
      'Strong earnings reports from Snap and Pinterest saw both companies soar after initially spiraling following Facebook’s torrid Q4 report.',
  },
  {
    id: 3,
    header: 'Disney Q1 Earnings: What Can Nervous Investors Expect In 2022?',
    date: 'FEB 4, 2022',
    estimatedTime: '10 minutes',
    shortDescription:
      'Analysts and investors will look to Disney’s streaming subscriber numbers as gauges of growth when the company reports earnings next week',
  },
  {
    id: 4,
    header: '3 Top E-Commerce Stocks to Buy in February 2022',
    date: 'FEB 4, 2022',
    estimatedTime: '10 minutes',
    shortDescription:
      'Beaten down e-commerce stocks such as Shopify and Etsy offer investors an opportunity to derive double-digit gains in the next 12-months.',
  },
  {
    id: 5,
    header: 'What Is A Better Investment Right Now: Lightspeed or Shopify?',
    date: 'FEB 4, 2022',
    estimatedTime: '10 minutes',
    shortDescription:
      'We delve into two Canadian companies providing e-commerce solutions to small and medium businesses and ask which is a better buy?',
  },
];

const renderedArticlesList = articlesList.map((article) => {
  return (
    <Article key={article.id}>
      <ArticleTitle href="#">{article.header}</ArticleTitle>
      <ArticleSmall>
        {article.date}, {article.estimatedTime}
      </ArticleSmall>
      <ArticleDescription>{article.shortDescription}</ArticleDescription>
    </Article>
  );
});

const BlogList = () => {
  return <BlogListStyled>{renderedArticlesList}</BlogListStyled>;
};

export default BlogList;
