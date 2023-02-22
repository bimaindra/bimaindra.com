import { IconCalendar, IconGraduate, IconLocation, IconWork } from "../Icon";

type TimelineProps = {
  timeline: any[];
};

const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <ol className="relative ml-4 border-l border-gray-200 dark:border-white">
      {timeline.map((item, index) => {
        return (
          <li className="mb-12 ml-9 last:mb-0 lg:mb-16 lg:ml-10" key={index}>
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 ring-8 ring-slate-200 dark:bg-transparent dark:ring-0 lg:-left-[14px] lg:h-7 lg:w-7">
              {item.type === "education" ? (
                <>
                  <IconGraduate />
                </>
              ) : (
                <>
                  <IconWork />
                </>
              )}
            </span>
            <h3 className="mb-2 flex items-center text-lg font-medium text-gray-900 dark:text-slate-200 lg:text-xl">
              {item.title}
              {index === 0 ? (
                <span className="mr-2 ml-3 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                  Latest
                </span>
              ) : (
                ""
              )}
            </h3>
            <time className="mb-2 flex items-center gap-x-2 text-sm leading-none text-gray-800 dark:text-slate-200 md:text-sm">
              <IconCalendar />
              <span>{item.date}</span>
            </time>
            <span className="mb-2 flex items-center gap-x-2 text-sm leading-none text-gray-800 dark:text-slate-200 md:text-sm">
              <IconLocation />
              <span>{item.location}</span>
            </span>
            <p className="mb-2 text-base text-gray-500 dark:text-slate-300">
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
