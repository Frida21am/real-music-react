import useGetArticles from "./useGetArticles";

export type ArticleDetails = {
  id: string;
  title: string;
  detailImg: string;
  detailDesc: React.ReactNode;
  detailContent: React.ReactNode;
};

function useGetArticleDetails(id: string) {
  const articleDetails = useGetArticles().find((article) => article.id == id);
  if (articleDetails == null) {
    throw new Error("Data not found!");
  }
  return articleDetails;
}

export default useGetArticleDetails;
