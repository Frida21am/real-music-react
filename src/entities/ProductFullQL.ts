export type ProductQl = {
  slug: string;
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
      label: string;
      options: string[];
      variation: false;
    }[];
  };
  metaData?: { key: string; value?: string | TrustedHTML }[];
};
