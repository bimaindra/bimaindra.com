import type { Metadata } from 'next';
import { getClient } from '@/config/apollo/client';
import { GET_PAGE } from '@/config/graphql/query';

export const metadata: Metadata = {
  title: 'Resources | bimaindra.com',
};

const slug = 'resources';

export default async function Resources() {
  const client = getClient();
  const {
    data: { page },
  } = await client.query({
    query: GET_PAGE,
    variables: {
      slug,
    },
  });

  if (!page) {
    return null;
  }

  return (
    <section className="u-safe-area">
      <div className="container">
        <div
          className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md"
          dangerouslySetInnerHTML={{ __html: page.content.html }}
        ></div>
      </div>
    </section>
  );
}
