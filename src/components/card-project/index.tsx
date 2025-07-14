'use client';

import NextImage from 'next/image';
import { forwardRef } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@heroui/react';
import type { CardProjectPropsType } from '@/types/components';
import { LuCalendarDays } from 'react-icons/lu';

const CardProject = forwardRef<HTMLDivElement, CardProjectPropsType>(
  ({ title, excerpt, date, url, stacks, image }, ref) => {
    return (
      <Card ref={ref} className="group dark:bg-slate-700">
        <CardHeader className="flex-col overflow-hidden p-0">
          <Image
            as={NextImage}
            src={image}
            alt={title}
            width={372}
            height={211}
            radius="none"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            className="object-cover grayscale-[60%] group-hover:scale-[1.015] group-hover:grayscale-0"
          />
        </CardHeader>
        <Divider />
        <CardBody>
          <h3 className="mb-2 text-lg font-title md:mb-4 lg:text-xl">
            {title}
          </h3>
          <p className="text-sm">{excerpt}</p>
          {stacks && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {stacks.map((stack, index) => (
                <span
                  key={index}
                  className="rounded-md border px-2 py-1 font-mono text-[10px] font-medium"
                >
                  #{stack}
                </span>
              ))}
            </div>
          )}
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex w-full justify-between">
            <p className="flex items-center gap-1 font-mono text-xs">
              <span>
                <LuCalendarDays />{' '}
              </span>
              <b className="mt-0.5">{date}</b>
            </p>
            <Link
              className="text-sm dark:text-white"
              showAnchorIcon
              href={url}
              target="_blank"
            >
              Visit website.
            </Link>
          </div>
        </CardFooter>
      </Card>
    );
  },
);

CardProject.displayName = 'CardProject';

export default CardProject;
