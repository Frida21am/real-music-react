import { useQuery } from "@tanstack/react-query";
import { articles } from "../data/data";

export type Article = {
  id: number;
  title: string;
  img: string;
  desc: string;
};

function useGetArticlesList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => {
      const list: Article[] = articles;
      if (list == null) {
        throw new Error("Data not found!");
      }
      return list;
    },
  });

  return { articlesList: data, isLoading, error };
}

export default useGetArticlesList;
