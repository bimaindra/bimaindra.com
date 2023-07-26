import Head from "next/head";
import { useFetchPortfolios } from "@/hooks/useFetch";
import UnderDev from "@/components/UnderDev";
import { formatDate } from "@/utils/formatDate";
import { IconCalendar } from "@/components/Icon";
import CardProject from "@/components/CardProject";

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
                  <CardProject
                    key={portfolio.id}
                    title={portfolio.title}
                    excerpt={portfolio.excerpt}
                    date={formatDate(portfolio.date, true)}
                    url={portfolio.url}
                    stacks={portfolio.techStack}
                  />
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
