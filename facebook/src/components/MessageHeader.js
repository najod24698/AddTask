import React from 'react';
import '../styles/MessageHeader.css';
import groupIcon from '../assets/group.svg';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function MessageHeader() {
    return (
        <div className="message__header">
            <img src={groupIcon} className="message__headerAvatar"/>
            <div className="message__headerDetails">
                <p className="group__headerName">Developer</p>
                <div className="message__headerMembers">+998 999787525, +998913458471, You</div>
            </div>
            <div className="message__options">
                <SearchIcon/>
                <MoreVertIcon/>
            </div>
        </div>
    )
}

export default MessageHeader
