'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { Image } from '@heroui/react';
import { LuCalendarDays, LuSquarePen } from 'react-icons/lu';
import type { CardBlogPropsType } from '@/types/components';

const CardBlog = ({
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
      className="group flex flex-col items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition duration-200 hover:bg-gray-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800 md:flex-row"
    >
      {image && (
        <div className="flex aspect-video h-full w-full md:w-56">
          <Image
            as={NextImage}
            className="!h-full rounded-t-lg object-cover grayscale transition duration-200 group-hover:grayscale-0 md:rounded-none md:rounded-l-lg"
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
        }`}
      >
        <h5 className="mb-3 line-clamp-3 text-2xl font-title tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="line-clamp-3 font-body text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="mt-6 flex justify-between md:mt-8">
          {author && (
            <span className="flex items-center gap-1 text-sm text-gray-900 dark:text-white">
              <LuSquarePen />
              {author}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1 text-sm text-gray-900 dark:text-white">
              <LuCalendarDays />
              {date}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
