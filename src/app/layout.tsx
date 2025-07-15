import type { Metadata } from 'next';
import { ApolloWrapper } from '@/config/apollo/wrapper';
import { FontDefault } from '@/config/font';
import LayoutBase from '@/components/layout-base';
import '@/assets/styles/globals.css';

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
          <LayoutBase>{children}</LayoutBase>
        </ApolloWrapper>
      </body>
    </html>
  );
}
