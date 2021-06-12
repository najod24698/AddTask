import React from 'react';
import Header from './Header';
import '../styles/Chat.css';
import Notification from './Notification';
import Search from './Search';
import ChatRender from './ChatRender';

function Chats() {
    return (
        <div className="chats">
            <div className="header__fixer">
                <Header/>
                <Notification/>
                <Search/>
                <ChatRender/>
            </div>
        </div>
    )
}

export default Chats
