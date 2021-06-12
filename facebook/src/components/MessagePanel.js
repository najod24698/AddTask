import React from 'react';
import MessageHeader from './MessageHeader';
import AllMessages from './AllMessages';
import MessageSender from './MessageSender';
import '../styles/MessagePanel.css';

function MessagePanel() {
    return (
        <div className="message">
            <MessageHeader/>
            <AllMessages/>
            <MessageSender/>
        </div>
    )
}

export default MessagePanel
