import React from 'react';
import Chats from '../components/Chats';
import MessagePanel from '../components/MessagePanel';
import '../styles/Default.css';

function Default() {
    return (
        <div className="default__page">
            <Chats/>
            <MessagePanel/>
        </div>
    )
}

export default Default
