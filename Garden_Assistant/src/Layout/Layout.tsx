import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className='absolute top-0 w-full'>
        <Header />
      </div>
      <div className='flex justify-center items-center'>{children}</div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
