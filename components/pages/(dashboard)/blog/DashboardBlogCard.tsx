import formatDate from "@/lib/formatDate";
import Link from "next/link";
import DeleteBlogBtn from "./DeleteBlogBtn";

interface DashboardBlogCard {
  title: string;
  summary: string;
  date: string;
  blogId: string;
  blogSlug: string;
  refetchBlogs: () => void;
}

export default function DashboardBlogCard({
  title,
  summary,
  date,
  blogId,
  blogSlug,
  refetchBlogs
}: DashboardBlogCard) {
  return (
    <div className="bg-white90 py-4 px-4 rounded-lg">
      <h6 className="text-white10 text-h6 font-bold line-clamp-2">
        <Link href={`/blog/${blogSlug}`} target="_blank">
          {title}
        </Link>
      </h6>
      <p className="text-white25 text-p mt-2 line-clamp-3">{summary}</p>
      <p className="text-white25 text-small mt-2">{formatDate(date)}</p>
      <div className="space-x-4 mt-4">
        <Link href={`/manage-blog/edit/${blogSlug}`} className="hover:text-primary">
          <button className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>
        </Link>
        <DeleteBlogBtn deleteHref={blogId} ariaLabel={`${title}-delete-blog`} refetchBlogs={refetchBlogs} />
      </div>
    </div>
  );
}