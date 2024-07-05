import { categories } from "../data/data";

export type Category = {
  id: number;
  title: string;
  img: string;
};

function useGetCategoriesList() {
  const list: Category[] = categories;
  if (list == null) {
    throw new Error("Data not found!");
  }
  return list;
}

export default useGetCategoriesList;
