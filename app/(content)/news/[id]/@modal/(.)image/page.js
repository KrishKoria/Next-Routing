import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";

export default async function InterceptedImagePage({ params }) {
  const newsItem = await getNewsItem(params.id);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            width={1024}
            height={1024}
            alt={newsItem.title}
          />
        </div>
      </dialog>
    </>
  );
}
