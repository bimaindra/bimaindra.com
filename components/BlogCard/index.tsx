import Link from "next/link";

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
  date,
  slug,
  author,
  image,
}: BlogCardProps) => {
  return (
    <Link
      href={slug}
      className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow-lg transition duration-300 hover:bg-gray-100 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row">
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
        <p className="font-body text-gray-700 line-clamp-3 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-6 flex justify-between md:mt-8">
          {author && (
            <span className="flex items-center gap-1 text-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              {author}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1 text-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              {date}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
