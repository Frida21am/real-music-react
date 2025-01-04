import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";
import {
  Category as WooCategory,
  Product as WooProduct,
} from "@/entities/woocommercProducts";
import { Category, Product } from "./apiClient.dto";

type Response<T> = {
  data: T;
  headers: unknown;
};

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://wp.real-music.store/",
  consumerKey: "ck_639315c13cff5d75755ef27bc2bf25d57bdac329",
  consumerSecret: "cs_f53ff4105f6611d16586e0d6b5be58d0962360f1",
  version: "wc/v3",
});

// Custom interceptor to remove woocommerce custom User-Agent (not allowed in Chrome/Safari)
axios.interceptors.request.use(function (config) {
  const { headers = {} } = config || {};
  if (headers["User-Agent"]) delete config.headers["User-Agent"];

  return config;
});

export async function getSubCategories(categoryId: number) {
  const resp: Response<WooCategory[]> = await api.get("products/categories", {
    parent: categoryId,
    per_page: 30,
  });

  const subCategoriesResp = resp.data;

  return subCategoriesResp.map((subCategoryQl) => {
    return {
      id: subCategoryQl.id,
      title: decodeURI(subCategoryQl.name),
      parentId: categoryId,
    };
  });
}

export async function getAllCategory() {
  const resp: Response<WooCategory[]> = await api.get("products/categories", {
    parent: 0,
  });

  const allCategorieResp = resp.data;

  const allCategory = allCategorieResp.find(
    (category) => category.parent === 0
  );
  if (allCategory == null) {
    throw new Error("Category All not found!");
  }

  const allCategoryObj: Category = {
    id: allCategory.id,
    title: decodeURI(allCategory.name),
    img: allCategory.image?.src,
  };

  return allCategoryObj;
}

export async function getAllCategories(allCategoryId: number) {
  const respAllCategories: Response<WooCategory[]> = await api.get(
    "products/categories",
    { parent: allCategoryId, per_page: 30 }
  );

  const categories: Category[] = respAllCategories.data.map((categoryQl) => {
    return {
      id: categoryQl.id,
      title: decodeURI(categoryQl.name),
      img: categoryQl.image?.src,
    };
  });

  return categories;
}

export type ProductsFilter = {
  page: number;
  per_page: number;
  search?: string;
  min_price?: number;
  max_price?: number;
  category?: number;
};

function mapProduct(wooProduct: WooProduct): Product {
  return {
    id: wooProduct.id,
    title: wooProduct.name,
    frontImg: wooProduct.images[0]?.src,
    backImg: wooProduct.images[1]?.src,
    price: decodeURI(wooProduct.price),
    description: wooProduct.description,
    descriptionShort: wooProduct.short_description,
    bestseller: false,
    slug: wooProduct.slug,
    priceRaw: Number.parseFloat(wooProduct.price),
    listingTime: new Date(wooProduct.date_modified),
    categoryIds: wooProduct.categories?.map((category) => category.id) ?? [],
    characteristics:
      wooProduct.attributes.map((attr) => {
        return {
          name: attr.name,
          value: attr.option?.[0],
        };
      }) ?? [],
    images: wooProduct.images.map((img) => img.src),
    isInStock: wooProduct.stock_status == "instock",
    videoSrc: wooProduct.meta_data?.find((el) => el.key == "video_frame")
      ?.value,
  };
}

export async function getAllProducts(filter?: ProductsFilter) {
  const resp: Response<WooProduct[]> = await api.get("products", filter);

  const products: Product[] = resp.data.map(mapProduct);

  return {
    products,
    totalPages: Number.parseInt(resp.headers["x-wp-totalpages"] ?? "0"),
  };
}

export async function getProductsByIds(ids: number[]) {
  if (ids.length == 0) return [];
  const resp: Response<WooProduct[]> = await api.get("products", {
    include: ids,
  });

  const products: Product[] = resp.data.map(mapProduct);

  return products;
}

export async function getProductById(id: number) {
  const resp: Response<WooProduct> = await api.get(`products/${id}`);

  const product: Product = mapProduct(resp.data);

  return product;
}

export default api;
