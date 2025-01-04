export type Category = {
  id: number;
  title: string;
  img?: string;
};

export type SubCategory = {
  id: number;
  title: string;
  parentId: number;
};

export type Product = {
  id: number;
  description: string;
  descriptionShort: string;
  images: string[];
  title: string;
  frontImg: string;
  backImg: string;
  price: string;
  priceRaw: number;
  listingTime: Date;
  bestseller: boolean;
  categoryIds: number[];
  slug: string;
  isInStock: boolean;
  characteristics: { name: string; value: string }[];
  videoSrc?: string;
};
