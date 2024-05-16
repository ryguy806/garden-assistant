import { Link } from "wasp/client/router";
import "./Main.css";

export const MainPage = () => {
  return (
    <div className='container h-52 flex justify-center items-center space-y-7'>
      <div className='items-center'>
        <h1 className='text-xl font-bold'>Welcome to the Garden Assistant.</h1>
      </div>
      <div className='space-y-5'>
        <p>
          The Garden Assistant is a web application that allows users to manage
          their garden.
        </p>
        <div className='flex flex-row space-x-10 justify-center items-center'>
          <div>
            <Link to='/garden'>View Your Garden</Link>
          </div>
          <div>
            <Link to='/calendar'>Calendar</Link>
          </div>
          <div>
            <Link to='/journal'>Garden Journal</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
