import Head from "next/head";
import { useFetchPortfolios } from "@/hooks/useFetch";
import UnderDev from "@/components/UnderDev";
import { formatDate } from "@/utils/formatDate";
import { IconCalendar } from "@/components/Icon";

export const getStaticProps = async () => {
  const { portfolios } = await useFetchPortfolios();

  if (!portfolios) {
    return {
      notFound: true,
    };
  }

  return {
    props: { portfolios },
    revalidate: 60,
  };
};

const Work = ({ portfolios }: { portfolios: any }) => {
  return (
    <>
      <Head>
        <title>Works and Projects | bimaindra.com</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
            <div className="prose mb-8 dark:prose-invert md:prose-base lg:mb-12">
              <h1>Works</h1>
              <p>Recent works and projects.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
              {portfolios ? (
                portfolios.map((portfolio: any) => (
                  <div
                    className="flex flex-col justify-between rounded-lg border shadow-lg transition-shadow hover:text-inherit hover:shadow-md"
                    key={portfolio.id}>
                    <div className="flex flex-col gap-2 px-5 py-4">
                      <h3 className="text-lg font-title">{portfolio.title}</h3>
                      <p className="text-sm">{portfolio.excerpt}</p>
                    </div>
                    <div className="flex justify-between border-t px-5 py-4">
                      <p className="flex items-center gap-1 font-mono text-xs">
                        <span>
                          <IconCalendar />{" "}
                        </span>
                        <b className="mt-0.5">
                          {formatDate(portfolio.date, true)}
                        </b>
                      </p>
                      <a
                        href={portfolio.url}
                        target="_blank"
                        className="text-sm underline dark:text-white">
                        Visit website
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <UnderDev />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
