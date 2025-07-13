import type { Metadata } from 'next';
import { FontDefault } from '@/config/font';
import Layout from '@/components/layout';
import '@/assets/styles/globals.css';
import { ApolloWrapper } from '../config/apollo/wrapper';

export const metadata: Metadata = {
  title: 'Bima Indra Mulya | Web Front End Engineer',
  description: 'Personal website of Bima Indra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`text-wd-dark dark:bg-slate-600 dark:text-wd-light ${FontDefault.className}`}
      >
        <ApolloWrapper>
          <Layout>{children}</Layout>
        </ApolloWrapper>
      </body>
    </html>
  );
}
