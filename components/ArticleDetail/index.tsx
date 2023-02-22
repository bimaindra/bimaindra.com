type ArticleDetailProps = {
  title: string;
  content: string;
  date: string;
  author: string;
  image?: string;
};

const ArticleDetail = ({
  title,
  content,
  date,
  author,
  image,
}: ArticleDetailProps) => {
  return (
    <section className="u-safe-area">
      <div className="container">
        <div className="prose mx-auto dark:prose-invert md:prose-base md:w-3/4 lg:w-1/2">
          {image && (
            <img
              className="aspect-video h-full w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg"
              src={image}
              alt={title}
            />
          )}
          <h1>{title}</h1>
          <div className="mb-6 flex border-spacing-2 justify-between border-b border-t border-dashed border-slate-500 py-2">
            <span className="flex items-center gap-1 text-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              {author}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              {date}
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
