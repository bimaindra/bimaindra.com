import { ChildrenPropsType } from "@/types";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeContextProvider } from "@/context/ThemeContext";

const Layout = ({ children }: ChildrenPropsType) => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
