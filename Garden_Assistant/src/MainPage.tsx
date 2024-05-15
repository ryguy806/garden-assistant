import waspLogo from "./waspLogo.png";
import "./Main.css";

export const MainPage = () => {
  return (
    <div className='container'>
      <main>
        <div>
          <h1>Welcome to the Garden Assistant.</h1>
        </div>
        <div>
          <p>
            The Garden Assistant is a web application that allows users to
            manage their garden.
          </p>
          <div>Garden View Link</div>
          <div>Calendar View Link</div>
          <div>Journal View Link</div>
        </div>
        <div className='flex flex-row'>
          <p>
            Built using Wasp:{" "}
            <img src={waspLogo} alt='wasp logo' height={20} className='mt-3' />
          </p>
        </div>
      </main>
    </div>
  );
};
