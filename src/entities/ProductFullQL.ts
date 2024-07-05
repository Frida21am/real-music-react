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
  onSale: boolean;
  stockStatus: string;
  price: string;
  rawPrice: number;
  regularPrice: string;
  salePrice?: string;
  stockQuantity?: null;
};
