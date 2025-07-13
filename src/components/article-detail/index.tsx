'use client';

import NextImage from 'next/image';
import { Image } from '@heroui/react';
import { ArticleDetailPropsType } from '@/types/components';
import { LuCalendarDays, LuSquarePen } from 'react-icons/lu';

const ArticleDetail = ({
  title,
  description,
  content,
  date,
  author,
  image,
  tags,
}: ArticleDetailPropsType) => {
  return (
    <>
      <section className="u-safe-area">
        <div className="container">
          <div className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md">
            {image && (
              <div className="relative mb-6 md:mb-8">
                <Image
                  as={NextImage}
                  className="!m-0 !h-full w-full rounded-lg object-cover"
                  src={image}
                  alt={title || description}
                  width={1600}
                  height={900}
                  priority
                />
              </div>
            )}
            <h1>{title}</h1>
            <div className="mb-6 flex border-spacing-2 justify-between border-b border-t border-dashed border-slate-500 py-2 dark:border-slate-200">
              <span className="flex items-center gap-1 text-sm">
                <LuSquarePen />
                {author}
              </span>
              <span className="flex items-center gap-1 text-sm">
                <LuCalendarDays />
                {date}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></div>
            {tags && (
              <div className="mt-8 flex gap-4 border-b border-t border-dashed border-slate-500 py-2 dark:border-slate-200 md:mt-12">
                <span>
                  <b>Tags:</b>
                </span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {tags.map((item: string, index: number) => {
                    return <span key={index}>#{item}</span>;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetail;
