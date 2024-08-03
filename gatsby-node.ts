import { CreatePagesArgs } from "gatsby";
import path from "path";

type Products = {
  wpgraphql: {
    products: {
      edges: {
        node: {
          id: string;
          slug: string;
        };
      }[];
    };
  };
};

type Articles = {
  wpgraphql: {
    posts: {
      edges: {
        node: {
          id: string;
          slug: string;
        };
      }[];
    };
  };
};

export const createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;
  const productsQl = await graphql<Products>(`
    query {
      wpgraphql {
        products(first: 100) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `);
  if (productsQl.errors || productsQl.data == null) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    return;
  }

  const products = productsQl.data.wpgraphql.products.edges.map(
    (edge) => edge.node
  );
  products.forEach((product) => {
    createPage({
      path: `/catalog/${decodeURI(product.slug)}/`,
      component: path.resolve(`./src/templates/productDetails.tsx`),
      context: { id: product.id },
    });
  });

  const articlesQl = await graphql<Articles>(`
    query {
      wpgraphql {
        posts(first: 100) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `);
  if (articlesQl.errors || articlesQl.data == null) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    return;
  }

  const articles = articlesQl.data.wpgraphql.posts.edges.map(
    (edge) => edge.node
  );
  articles.forEach((article) => {
    createPage({
      path: `/articles/${decodeURI(article.slug)}/`,
      component: path.resolve(`./src/templates/Article.tsx`),
      context: { id: article.id },
    });
  });
};
