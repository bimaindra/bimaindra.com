import { CardProjectProps } from "@/types";
import { IconCalendar } from "../Icon";

const CardProject = ({
  title,
  excerpt,
  date,
  url,
  stacks,
}: CardProjectProps) => {
  return (
    <div className="flex flex-col justify-between rounded-lg border shadow-lg transition-shadow hover:text-inherit hover:shadow-md dark:border-slate-300">
      <div className="flex flex-col gap-3 px-5 py-4">
        <h3 className="pb-2 text-lg font-title underline">{title}</h3>
        <p className="text-sm">{excerpt}</p>
        {stacks && (
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {stacks.map((stack, index) => (
              <span
                key={index}
                className="rounded-md border py-1 px-2 font-mono text-[11px] font-medium">
                {stack}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-between border-t border-t-slate-300 px-5 py-4">
        <p className="flex items-center gap-1 font-mono text-xs">
          <span>
            <IconCalendar />{" "}
          </span>
          <b className="mt-0.5">{date}</b>
        </p>
        <a
          href={url}
          target="_blank"
          className="text-sm underline dark:text-white">
          Visit website
        </a>
      </div>
    </div>
  );
};

export default CardProject;
