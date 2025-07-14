import type { Metadata } from 'next';
import type { GetPortfoliosPaginatedResponse } from '@/types/api';
import { getClient } from '@/config/apollo/client';
import { GET_PORTFOLIOS_PAGINATED } from '@/config/graphql/query';
import LoadMoreProjects from '@/components/load-more-projects';

export const metadata: Metadata = {
  title: 'Recent Projects | bimaindra.com',
};

export default async function Work() {
  const client = getClient();
  const { data } = await client.query<GetPortfoliosPaginatedResponse>({
    query: GET_PORTFOLIOS_PAGINATED,
    variables: {
      skip: 0,
      first: 6,
    },
  });
  const { portfolios, portfoliosConnection } = data;
  const totalPortfolios = portfoliosConnection.aggregate.count;

  if (!portfolios || portfolios.length === 0) {
    return (
      <section className="u-safe-area">
        <div className="container">
          <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
            <div className="prose mb-8 dark:prose-invert md:prose-base lg:mb-12">
              <h1>👨🏻‍💻 Projects</h1>
              <p>Recent projects that I have worked on.</p>
            </div>
            <div className="py-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                No portfolios found
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="u-safe-area">
      <div className="container">
        <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md">
          <div className="prose mb-8 dark:prose-invert md:prose-base lg:mb-12">
            <h1>👨🏻‍💻 Projects</h1>
            <p>Recent projects that I have worked on.</p>
          </div>

          <LoadMoreProjects
            initialPortfolios={portfolios}
            totalCount={totalPortfolios}
            itemsPerPage={6}
          />
        </div>
      </div>
    </section>
  );
}
