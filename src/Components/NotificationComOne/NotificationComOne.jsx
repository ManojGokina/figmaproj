import React from "react";
import "./NotificationComOne.css";
import bell from "../../assets/bell.svg";
const NotificationComOne = () => {
  return (
    <div className="notificationComOne">
      <div className="notOneBell">
        <div>
          <img src={bell} />
        </div>
        <p>Save</p>
      </div>
      <p className="notOneText">We'll be sending notifications to you here</p>
      <input className="notOneInput" type="text" />
    </div>
  );
};

export default NotificationComOne;
