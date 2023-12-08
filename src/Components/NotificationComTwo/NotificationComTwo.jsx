import React from "react";
import "./NotificationComTwo.css";

const NotificationComTwo = () => {
  return (
    <div className="notificationComTwo">
      <div className="notOneBell">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
          >
            <path
              d="M23.0996 25.9004V11.9004"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7002 25.9V3.5"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.2998 25.9V17.5"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input type="checkbox" defaultChecked={true} />
      </div>
      <div className="notTwoText">
        <p className="">Notify me when any wallets move more than</p>
        <select>
          <option value="$1,000.00">$1,000.00</option>
          <option value="$2,000.00">$2,000.00</option>
          <option value="$5,000.00">$5,000.00</option>
          <option value="$1o,000.00">$10,000.00</option>
        </select>
      </div>
    </div>
  );
};

export default NotificationComTwo;
