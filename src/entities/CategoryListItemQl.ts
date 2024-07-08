export type CategoryListItemQl = {
  id: string;
  name: string;
  parent?: {
    node: {
      id: string;
    };
  };
  image?: {
    sourceSrc: string
  }
};
