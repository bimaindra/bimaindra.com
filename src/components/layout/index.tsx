'use client';

import { HeroUIProvider } from '@heroui/react';
import type { ChildrenPropsType } from '@/types/components';
import { ThemeContextProvider } from '@/context/ThemeContext';
import Footer from '@/components/footer';
import Header from '@/components/header';

const Layout = ({ children }: ChildrenPropsType) => {
  return (
    <>
      <HeroUIProvider>
        <ThemeContextProvider>
          <Header />
        </ThemeContextProvider>
        <main>{children}</main>
        <Footer />
      </HeroUIProvider>
    </>
  );
};

export default Layout;
