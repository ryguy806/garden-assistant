import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className='absolute top-0 w-full'>
        <Header />
      </div>
      <div className='flex flex-col mt-16'>
        <div className='ml-5 p-o'>
          <Link to='/' className='underline font-bold tezxt-lg'>
            Home
          </Link>
        </div>
        <div className='flex justify-center items-center -mt-48'>
          {children}
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
