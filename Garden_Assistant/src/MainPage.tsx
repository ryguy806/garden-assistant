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
        </div>
        <div>
          <p>Built using Wasp:</p>
          <img src={waspLogo} alt='wasp logo' />
        </div>
      </main>
    </div>
  );
};
