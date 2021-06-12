import React from 'react';
import groupIcon from '../assets/group.svg';
import '../styles/Group.css';
import seen from '../assets/seen.svg';

function Group() {
    return (
        <div className="group">
            <div className="group__icon">
                <img src={groupIcon} alt="" />
            </div>
            <div className="group__details">
                <div className="group__timeAndName">
                    <p className="group__name">Developer</p>
                    <span className="group__lastTime">6:59PM</span>
                </div>
                <div className="group__status">
                    <img src={seen} alt="" />
                    <p className="group__lastMessage">
                        Hello
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Group
