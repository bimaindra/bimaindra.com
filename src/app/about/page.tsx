import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';
import type { GetPageResponse } from '@/types/api';
import { getClient } from '@/config/apollo/client';
import { GET_PAGE } from '@/config/graphql/query';
import TitleSection from '@/components/title-section';

export const metadata: Metadata = {
  title: 'About | bimaindra.com',
};

const slug = 'about';

export default async function About() {
  const client = getClient();
  const {
    data: { page },
  } = await client.query<GetPageResponse>({
    query: GET_PAGE,
    variables: {
      slug,
    },
  });

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <section className="u-safe-area">
      <div className="container">
        <div className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md">
          <div dangerouslySetInnerHTML={{ __html: page.content.html }}></div>
          <TitleSection title="Ping me" />
          <div className="flex items-center gap-4">
            <Link
              href="mailto:bimaindramulya@gmail.com"
              className="transition-transform hover:-translate-y-1"
            >
              <FaEnvelope size={24} />
            </Link>
            <Link
              href="http://github.com/bimaindra"
              target="_blank"
              className="transition-transform hover:-translate-y-1"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="http://linkedin.com/in/bimaindra"
              target="_blank"
              className="transition-transform hover:-translate-y-1"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="http://twitter.com/bimaindraa"
              target="_blank"
              className="transition-transform hover:-translate-y-1"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="http://instagram.com/bimaindraa"
              target="_blank"
              className="transition-transform hover:-translate-y-1"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
