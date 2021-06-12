import React from "react";
import '../styles/Personal.css';
import Avatar from '@material-ui/core/Avatar';
import seen from '../assets/seen.svg';

function Personal() {
  return (
    <div className="personal">
      <div className="personal__icon">
        <Avatar style={{width: "49px", height: "49px"}}/>
      </div>
      <div className="personal__details">
        <div className="personal__timeAndName">
          <p className="personal__name">Developer</p>
          <span className="personal__lastTime">6:59PM</span>
        </div>
        <div className="personal__status">
          <img src={seen} alt="" />
          <p className="personal__lastMessage">Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Personal;
