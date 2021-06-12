import React from "react";
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import { Link } from 'react-router-dom';
import '../styles/Notification.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Notification() {
  return (
    <div className="notification">
      <div className="notification__bell">
        <NotificationsOffIcon />
      </div>
      <div className="notification__message">
        <span className="get__notified">Get notified of new messages</span>
        <p className="notification__link">
            <Link>
                Turn on desktop notifications
            </Link>
            <ArrowForwardIosIcon style={{fontSize: "12px"}}/>
        </p>
      </div>
    </div>
  );
}

export default Notification;
