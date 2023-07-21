import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile container">
      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-name">
            {currentUser.firstName} {currentUser.lastName}
          </div>
          <div className="profile-email">{currentUser.userName}</div>
          <div className="profile-bio">
            Sorry, we are improving for you!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
