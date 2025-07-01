import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";
import {
  Category as WooCategory,
  Product as WooProduct,
} from "@/api/woocommercProducts";
import { Product } from "./apiClient.dto";

// Удалим User-Agent заголовок, если он есть
axios.interceptors.request.use((config) => {
  if (config.headers && "User-Agent" in config.headers) {
    delete config.headers["User-Agent"];
  }
  return config;
});

const api = new WooCommerceRestApi({
  url: "https://wp.real-music.store/",
  consumerKey: "ck_639315c13cff5d75755ef27bc2bf25d57bdac329",
  consumerSecret: "cs_f53ff4105f6611d16586e0d6b5be58d0962360f1",
  version: "wc/v3",
});

type WooCommerceResponse<T> = {
  data: T;
  headers: {
    "x-wp-total"?: string;
    "x-wp-totalpages"?: string;
    [key: string]: unknown;
  };
};

export async function getSubCategories(categoryId: number) {
  const resp: WooCommerceResponse<WooCategory[]> = await api.get(
    "products/categories",
    {
      parent: categoryId,
      per_page: 30,
    }
  );

  return resp.data.map((subCategoryQl) => ({
    id: subCategoryQl.id,
    title: decodeURI(subCategoryQl.name),
    parentId: categoryId,
  }));
}

export async function getAllCategory() {
  const resp: WooCommerceResponse<WooCategory[]> = await api.get(
    "products/categories",
    { parent: 0 }
  );

  const allCategory = resp.data.find((category) => category.parent === 0);
  if (!allCategory) throw new Error("Category All not found!");

  return {
    id: allCategory.id,
    title: decodeURI(allCategory.name),
    img: allCategory.image?.src,
  };
}

export async function getAllCategories(allCategoryId: number) {
  const resp: WooCommerceResponse<WooCategory[]> = await api.get(
    "products/categories",
    { parent: allCategoryId, per_page: 30 }
  );

  return resp.data.map((categoryQl) => ({
    id: categoryQl.id,
    title: decodeURI(categoryQl.name),
    img: categoryQl.image?.src,
  }));
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
    priceRaw: parseFloat(wooProduct.price),
    listingTime: new Date(wooProduct.date_modified),
    categoryIds: wooProduct.categories?.map((c) => c.id) ?? [],
    characteristics:
      wooProduct.attributes.map((attr) => ({
        name: attr.name,
        value: attr.option?.[0],
      })) ?? [],
    images: wooProduct.images.map((img) => img.src),
    isInStock: wooProduct.stock_status === "instock",
    videoSrc: wooProduct.meta_data?.find((el) => el.key === "video_frame")
      ?.value,
  };
}

export async function getAllProducts(filter?: ProductsFilter) {
  const resp: WooCommerceResponse<WooProduct[]> = await api.get(
    "products",
    filter
  );

  return {
    products: resp.data.map(mapProduct),
    totalPages: Number(resp.headers["x-wp-totalpages"] || 0),
  };
}

export async function getProductsByIds(ids: number[]) {
  if (ids.length === 0) return [];
  const resp: WooCommerceResponse<WooProduct[]> = await api.get("products", {
    include: ids,
  });

  return resp.data.map(mapProduct);
}

export async function getProductById(id: number) {
  const resp: WooCommerceResponse<WooProduct> = await api.get(`products/${id}`);
  return mapProduct(resp.data);
}

export default api;
