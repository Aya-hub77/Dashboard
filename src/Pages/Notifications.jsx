import React from "react";
import "./Notifications.css";
import { notificationsData } from "../assets/notificationsData";

const Notifications = ({collapsed}) => {

  return (
    <div className={`notifications ${collapsed ? "collapsed" : ""}`}>
      <h3>Notifications</h3>
      <ul className="notifications-list">
        {notificationsData.map((item) => (
          <li key={item.id} className="notifications-item">
            <div className="details">
              <p>{item.message}</p>
              <span>{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
