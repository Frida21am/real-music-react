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

export const createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;
  const result = await graphql<Products>(`
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
  if (result.errors || result.data == null) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    return;
  }

  const products = result.data.wpgraphql.products.edges.map(
    (edge) => edge.node
  );
  products.forEach((product) => {
    createPage({
      path: `/catalog/${decodeURI(product.slug)}/`,
      component: path.resolve(`./src/templates/productDetails.tsx`),
      context: { id: product.id },
    });
  });
};
