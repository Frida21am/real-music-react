import { Product } from "./apiClient.dto";

type StoreCategory = { id: number; name: string; parent: number; image?: { src: string } };
type StoreProduct = {
  id: number; name: string; slug: string; description: string; short_description: string;
  images: { src: string }[]; categories: { id: number }[];
  attributes: { name: string; terms: { name: string }[] }[];
  prices: { price: string; currency_symbol: string; currency_minor_unit: number };
  is_in_stock: boolean;
};

async function catalog<T>(resource: string, params: Record<string, string | number | undefined> = {}) {
  const query = new URLSearchParams({ resource });
  for (const [key, value] of Object.entries(params)) if (value !== undefined) query.set(key, String(value));
  const response = await fetch(`/api/catalog?${query}`);
  if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
  return { data: (await response.json()) as T, totalPages: Number(response.headers.get("x-wp-totalpages") ?? 0) };
}

async function categories() {
  return (await catalog<StoreCategory[]>("products/categories", { per_page: 100 })).data;
}

export async function getSubCategories(categoryId: number) {
  return (await categories()).filter((item) => item.parent === categoryId)
    .map((item) => ({ id: item.id, title: item.name, parentId: categoryId }));
}

export async function getAllCategory() {
  const items = await categories();
  const root = items.find((item) => item.parent === 0 && item.name === "Все")
    ?? items.find((item) => item.parent === 0);
  if (!root) throw new Error("Root category not found");
  return { id: root.id, title: root.name, img: root.image?.src };
}

export async function getAllCategories(rootId: number) {
  return (await categories()).filter((item) => item.parent === rootId)
    .map((item) => ({ id: item.id, title: item.name, img: item.image?.src }));
}

export type ProductsFilter = {
  page: number; per_page: number; search?: string; min_price?: number;
  max_price?: number; category?: number; order?: string; orderBy?: string;
};

function mapProduct(item: StoreProduct): Product {
  const priceRaw = Number(item.prices.price) / 10 ** item.prices.currency_minor_unit;
  return {
    id: item.id, title: item.name, slug: item.slug,
    frontImg: item.images[0]?.src ?? "", backImg: item.images[1]?.src ?? item.images[0]?.src ?? "",
    images: item.images.map((image) => image.src),
    description: item.description, descriptionShort: item.short_description,
    price: `${priceRaw.toLocaleString("ru-RU")} ${item.prices.currency_symbol}`, priceRaw,
    listingTime: new Date(0), bestseller: false,
    categoryIds: item.categories.map((category) => category.id),
    characteristics: item.attributes.map((attribute) => ({
      name: attribute.name, value: attribute.terms.map((term) => term.name).join(", "),
    })),
    isInStock: item.is_in_stock,
  };
}

export async function getAllProducts(filter?: ProductsFilter) {
  const { data, totalPages } = await catalog<StoreProduct[]>("products", {
    page: filter?.page, per_page: filter?.per_page, search: filter?.search,
    min_price: filter?.min_price, max_price: filter?.max_price,
    category: filter?.category, order: filter?.order, orderby: filter?.orderBy,
  });
  return { products: data.map(mapProduct), totalPages };
}

export async function getProductsByIds(ids: number[]) {
  if (ids.length === 0) return [];
  return (await catalog<StoreProduct[]>("products", { include: ids.join(","), per_page: 100 })).data.map(mapProduct);
}

export async function getProductById(id: number) {
  return mapProduct((await catalog<StoreProduct>(`products/${id}`)).data);
}
