import { ChildrenProps } from "@/types";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
