import { NewsList } from "@/components/news_list";
import { getAllNews } from "@/lib/news";
export default async function NewsPage() {
  const news = await getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
