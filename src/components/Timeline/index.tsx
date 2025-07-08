'use client';
import * as motion from 'motion/react-client';
import { Variants } from 'motion/react';
import { useState } from 'react';
import { TimelinesPropsType } from '@/types/components';
import { MdOutlineWork } from 'react-icons/md';
import { LuGraduationCap, LuCalendarDays, LuMapPin } from 'react-icons/lu';

import { formatDate } from '@/utils/format-date';

const cardVariants: Variants = {
  offscreen: {
    y: 120,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.25,
      duration: 0.35,
    },
  },
};

const Timeline = ({ timelines }: TimelinesPropsType) => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_ITEMS_COUNT = 3;

  const hasMoreItems = timelines.length > INITIAL_ITEMS_COUNT;

  return (
    <div className="relative">
      <motion.div
        className="relative overflow-hidden pb-4 pl-1 lg:pb-0"
        animate={{
          height: showAll ? 'auto' : '584px',
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <ol className="relative ml-4 mt-2 whitespace-normal break-words border-l border-gray-200 before:absolute before:-left-[4.5px] before:top-0 before:h-2 before:w-2 before:rounded-md before:bg-gray-200 after:absolute after:-left-[4.5px] after:bottom-0 after:h-2 after:w-2 after:rounded-md after:bg-gray-200 dark:border-white">
          {timelines.map((item, index) => {
            return (
              <motion.li
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={cardVariants}
                className="relative mb-10 ml-8 last:mb-0"
              >
                <span className="absolute -left-10 flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 ring-8 ring-slate-200 dark:bg-slate-500 dark:ring-slate-500 lg:-left-[42px]">
                  {item.type === 'education' ? (
                    <>
                      <LuGraduationCap />
                    </>
                  ) : (
                    <>
                      <MdOutlineWork />
                    </>
                  )}
                </span>
                <h3 className="mb-2 flex items-center text-lg font-medium text-gray-900 dark:text-slate-200">
                  {item.title}
                  {index === 0 ? (
                    <span className="ml-3 mr-2 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                      Latest
                    </span>
                  ) : (
                    ''
                  )}
                </h3>
                <time className="mb-2 flex items-center gap-x-2 text-sm leading-none text-gray-800 dark:text-slate-200 md:text-sm">
                  <LuCalendarDays />
                  {item.type === 'jobs' ? (
                    <span>{`${formatDate(item.date)} - ${
                      item.endDate === null ? 'Now' : formatDate(item.endDate)
                    }`}</span>
                  ) : (
                    <span>{formatDate(item.endDate)}</span>
                  )}
                </time>
                <span className="mb-2 flex items-center gap-x-2 text-sm leading-none text-gray-800 dark:text-slate-200 md:text-sm">
                  <LuMapPin />
                  <span>{item.location}</span>
                </span>
                <p className="mb-2 text-sm text-gray-500 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ol>

        {/* Gradient overlay for peek effect when collapsed */}
        {hasMoreItems && !showAll && (
          <motion.div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-slate-600 dark:via-slate-600/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>

      {hasMoreItems && (
        <div className="relative mt-6 text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show less' : 'Show another'}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
