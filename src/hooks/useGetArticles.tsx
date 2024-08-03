import { graphql, useStaticQuery } from "gatsby";

const GET_ARTICLES = graphql`
  query {
    wpgraphql {
      posts {
        edges {
          node {
            id
            slug
            title
            excerpt(format: RENDERED)
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

type articlesQuery = {
  wpgraphql: {
    posts: {
      edges: {
        node: ArticleQl;
      }[];
    };
  };
};

type ArticleQl = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    node?: {
      sourceUrl: string;
    };
  };
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
};

function useGetArticles() {
  const articles: Article[] = useStaticQuery<articlesQuery>(GET_ARTICLES)
    .wpgraphql.posts.edges.map((e) => e.node)
    .map((pql) => {
      return {
        id: pql.id,
        slug: pql.slug,
        title: pql.title,
        excerpt: pql.excerpt,
        image: pql.featuredImage.node?.sourceUrl,
      };
    });
  return articles;
}

export default useGetArticles;
