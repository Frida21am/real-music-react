import { graphql, useStaticQuery } from "gatsby";
import { CategoryListItemQl } from "../entities/CategoryListItemQl";

export type Category = {
  id: string;
  title: string;
  img?: string;
  subCategories: SubCategory[];
};

export type SubCategory = {
  id: string;
  title: string;
};

const GET_CATEGORIES = graphql`
  {
    wpgraphql {
      productCategories(first: 500) {
        edges {
          node {
            id
            name
            parentId
            children {
              edges {
                node {
                  id
                }
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
  const listCategories = useStaticQuery<categoriesQuery>(
    GET_CATEGORIES
  ).wpgraphql.productCategories.edges.map((ql) => ql.node);
  if (listCategories == null) {
    throw new Error("Data not found!");
  }
  const allCategory = listCategories.find(
    (category) => category.parentId == null
  );
  if (allCategory == null) {
    throw new Error("Category All not found!");
  }
  const categories: Category[] = listCategories
    .filter((category) => category.parentId == allCategory.id)
    .map((categoryQl) => {
      return {
        id: categoryQl.id,
        title: categoryQl.name,
        parentId: categoryQl.parentId,
        img: categoryQl.image?.sourceUrl,
        subCategories: listCategories
          .filter((category) => category.parentId == categoryQl.id)
          .map((subCategoryQl) => {
            return {
              id: subCategoryQl.id,
              title: subCategoryQl.name,
            };
          }),
      };
    });

  const allCategoryObj: Category = {
    id: allCategory.id,
    title: allCategory.name,
    img: allCategory.image?.sourceUrl,
    subCategories: [],
  };
  categories.unshift(allCategoryObj);

  return categories;
}

export default useGetCategoriesList;
