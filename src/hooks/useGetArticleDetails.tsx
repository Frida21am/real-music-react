/*import { useQuery } from "@tanstack/react-query";
import { articles } from "../data/data";

export type ArticleDetails = {
  id: number;
  title: string;
  detailImg: string;
  detailDesc: React.ReactNode;
  detailContent: React.ReactNode;
};

function useGetArticleDetails(articleId: number) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["articles", articleId],
    queryFn: () => {
      const details: ArticleDetails | undefined = articles.find(
        (article) => article.id == articleId
      );
      if (details == null) {
        throw new Error("Data not found!");
      }
      return details;
    },
  });

  return { articleDetails: data, isLoading, error };
}

export default useGetArticleDetails;*/
