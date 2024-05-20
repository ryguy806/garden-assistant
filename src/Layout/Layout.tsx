import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = ({ children }: any) => {
  return (
    <div className='height-full'>
      <div className='sticky top-0 w-full'>
        <Header />
      </div>
      <div className='flex flex-col mt-1-0 h-auto'>
        <div className='ml-5 p-0'>
          <Link to='/' className='underline font-bold text-lg'>
            Home
          </Link>
        </div>
        <div className='flex justify-center items-center'>{children}</div>
      </div>
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
