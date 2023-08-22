import Link from "next/link";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import { CardBlogPropsType } from "@/types";
import { IconCalendar, IconPencil } from "../Icon";

const BlogCard = ({
  title,
  description,
  date,
  slug,
  author,
  image,
}: CardBlogPropsType) => {
  return (
    <Link
      href={slug}
      className="group flex flex-col items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg duration-200 transition hover:bg-gray-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800 md:flex-row">
      {image && (
        <div className="flex aspect-video h-full w-full md:w-56">
          <Image
            as={NextImage}
            className="h-full rounded-t-lg object-cover grayscale duration-200 transition group-hover:grayscale-0 md:rounded-none md:rounded-l-lg"
            src={image}
            alt={title}
            width={500}
            height={500}
            radius="none"
          />
        </div>
      )}
      <div
        className={`flex flex-col justify-between p-4 leading-normal ${
          image && `md:py-6`
        }`}>
        <h5 className="mb-3 text-2xl font-title tracking-tight text-gray-900 line-clamp-3 dark:text-white">
          {title}
        </h5>
        <p className="font-body text-gray-700 line-clamp-3 dark:text-gray-300">
          {description}
        </p>
        <div className="mt-6 flex justify-between md:mt-8">
          {author && (
            <span className="flex items-center gap-1 text-sm text-gray-900 dark:text-white">
              <IconPencil />
              {author}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1 text-sm text-gray-900 dark:text-white">
              <IconCalendar />
              {date}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
