import { graphql, useStaticQuery } from "gatsby";
import { CategoryListItemQl } from "../entities/CategoryListItemQl";

export type Category = {
  id: string;
  title: string;
  img?: string;
};

const GET_CATEGORIES = graphql`
  {
    wpgraphql {
      productCategories {
        edges {
          node {
            id
            name
            parent {
              node {
                id
              }
            }
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

type categoriesQuery = {
  wpgraphql: {
    productCategories: {
      edges: {
        node: CategoryListItemQl;
      }[];
    };
  };
};

function useGetCategoriesList() {
  const list: Category[] = useStaticQuery<categoriesQuery>(GET_CATEGORIES)
    .wpgraphql.productCategories.edges.map((ql) => ql.node)
    .map((categoryQl) => {
      return {
        id: categoryQl.id,
        title: categoryQl.name,
        parentId: categoryQl.parent?.node.id,
        img: categoryQl.image?.sourceUrl,
      };
    });
  if (list == null) {
    throw new Error("Data not found!");
  }
  return list;
}

export default useGetCategoriesList;
