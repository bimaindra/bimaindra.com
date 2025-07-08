'use client';

import { ChildrenPropsType } from '@/types/components';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { HeroUIProvider } from '@heroui/react';
import { ThemeContextProvider } from '@/context/ThemeContext';

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
