import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function ImagePage({ params }) {
  const newsItem = DUMMY_NEWS.find((news) => news.slug === params.id);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        width={1024}
        height={1024}
        alt={newsItem.title}
      />
    </div>
  );
}
