import { getNewsItem } from "@/lib/news";
import Image from "next/image";

export default async function ImagePage({ params }) {
  const newsItem = getNewsItem(params.id);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} fill alt={newsItem.title} />
    </div>
  );
}
