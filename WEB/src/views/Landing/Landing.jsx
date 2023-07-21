import "./Landing.css";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import { logout } from "../../stores/AccessTokenStore.js";
import logo from "../../assets/images/voladores.jpeg";

const Landing = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="landing-page">
      {currentUser && (
        <div className="header">
          <button className="btn btn-secondary logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      <div className="landing-page-content">
        {!currentUser ? (
          <div>
            <div>
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="wrapper">
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                 Sign up
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                 Login
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <h2>Hi! {currentUser.firstName} </h2>
            <h5>{currentUser.userName} </h5>
            <h3>What do you want to do today?</h3>
            <div className="wrapper">
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/create-book";
                }}
              >
                Upload a text
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/my-books";
                }}
              >
                My texts
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;