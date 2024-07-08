export type ProductFullQl = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;

  galleryImages: {
    nodes: {
      sourceUrl: string;
      altText: string;
    }[];
  };
  onSale: boolean;
  stockStatus: string;
  price: string;
  rawPrice: number;
  regularPrice: string;
  salePrice?: string;
  stockQuantity?: null;
};

export type ProductCatalogItemQl = {
  slug: string;
  id: string;
  name: string;
  shortDescription: string;
  image: {
    sourceUrl: string;
  };
  productCategories: {
    nodes: { id: string }[];
  };
  onSale: boolean;
  stockStatus: string;
  price: string;
  rawPrice: number;
  regularPrice: string;
  salePrice?: string;
  stockQuantity?: null;
  modified: string;
  attributes: {
    nodes: {
      id: string;
      name: string;
      options: string[];
      variation: false;
    };
  };
};
