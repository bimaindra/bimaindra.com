import Link from "next/link";
import { IconCalendar, IconPencil } from "../Icon";
import { formatDate } from "@/lib/helpers";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
  image?: string;
};

const BlogCard = ({
  title,
  description,
  date = "2018-08-17",
  slug,
  author,
  image,
}: BlogCardProps) => {
  return (
    <Link
      href={slug}
      className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow-lg transition duration-300 hover:bg-gray-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800 md:flex-row">
      {image && (
        <img
          className="aspect-video h-full w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt={title}
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-3 text-2xl font-title tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-body text-gray-700 line-clamp-3 dark:text-gray-300">
          {description}
        </p>
        <div className="mt-6 flex justify-between md:mt-8">
          {author && (
            <span className="flex items-center gap-1 text-sm dark:text-white">
              <IconPencil />
              {author}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1 text-sm dark:text-white">
              <IconCalendar />
              {formatDate(date)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
