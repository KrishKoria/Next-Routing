import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  const newsItem = DUMMY_NEWS.find((news) => news.slug === params.id);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={112}
            height={112}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
