import React from 'react';
import Group from './Group';
import Personal from './Personal';
import '../styles/ChatRender.css'

function ChatRender() {
    return (
        <div className="chat__render">
            <Group/>
            <Personal/>
            <Group/>
            <Personal/>
            <Group/>
            <Personal/>
            <Group/>
            <Personal/>
            <Group/>
            <Personal/>
            <Group/>
            <Personal/>
        </div>
    )
}

export default ChatRender
