import type { Metadata } from 'next';
import { formatDate } from '@/utils/format-date';
import CardProject from '@/components/card-project';
import { getClient } from '@/config/apollo/client';
import { GET_PORTFOLIOS } from '@/config/graphql/query';

export const metadata: Metadata = {
  title: 'Recent Projects | bimaindra.com',
};

export default async function Work() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_PORTFOLIOS,
  });
  const portfolios = data.portfolios;

  if (!portfolios) {
    return <div>No portfolios found</div>;
  }

  return (
    <section className="u-safe-area">
      <div className="container">
        <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
          <div className="prose mb-8 dark:prose-invert md:prose-base lg:mb-12">
            <h1>👨🏻‍💻 Projects</h1>
            <p>Recent projects.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2">
            {portfolios.map(
              (portfolio: {
                id: string;
                title: string;
                excerpt: string;
                date: string;
                url: string;
                techStack: string[];
                image: { url: string } | null;
              }) => (
                <CardProject
                  key={portfolio.id}
                  title={portfolio.title}
                  excerpt={portfolio.excerpt}
                  date={formatDate(portfolio.date, true)}
                  url={portfolio.url}
                  stacks={portfolio.techStack}
                  image={
                    portfolio.image !== null
                      ? portfolio.image.url
                      : `https://placehold.co/600x340/webp/?text=${portfolio.title}&font=montserrat`
                  }
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
