export type CategoryListItemQl = {
  id: string;
  name: string;
  parentId?: string;
  children: {
    edjes: {
      node: {
        id: string;
      };
    }[];
  };
  image?: {
    sourceUrl: string;
  };
};
