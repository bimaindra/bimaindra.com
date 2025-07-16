import type { Metadata } from 'next';
import Script from 'next/script';
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
        <Script
          defer
          src="https://analytics.bimaindra.com/script.js"
          data-website-id="b761001c-806f-4f4a-8f8b-e6f71fa6135b"
          strategy="afterInteractive"
        />
        <ApolloWrapper>
          <LayoutBase>{children}</LayoutBase>
        </ApolloWrapper>
      </body>
    </html>
  );
}
