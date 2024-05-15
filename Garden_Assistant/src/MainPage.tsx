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
          <div>Garden View Link</div>
          <div>Calendar View Link</div>
          <div>Journal View Link</div>
        </div>
      </div>
    </div>
  );
};
