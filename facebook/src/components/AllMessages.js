import React from 'react';
import '../styles/AllMessages.css';
import seen from '../assets/seen.svg';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';

function AllMessages() {
    const testMessages = [
        {
            messageContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.",
            messageTime: "6:49PM",
            messsageSeen: seen
        },
        {
            messageContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo ",
            messageTime: "6:59PM",
            messsageSeen: seen
        },
        {
            messageContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.",
            messageTime: "6:69PM",
            messsageSeen: seen
        },
        {
            messageContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam et tempore iste in alias nemo deleniti illo nostrum non, perspiciatis optio quae veritatis nesciunt eos inventore a omnis blanditiis fuga.",
            messageTime: "6:59PM",
            messsageSeen: seen
        },
        {
            messageContent: "Lorem ipsum, dolor sit amet consectetur",
            messageTime: "7:49PM",
            messsageSeen: seen
        }
    ]
    return (
        <div className="all__messages">
            <div className="message__container">
                <div className="default__message">
                    <p className="default__notification"> <NoEncryptionIcon style={{fontSize: "15px"}}/>Messages are end-to-end encrypted. No one outside of this chat, not even AlgoritmApp can read or listen to them. Click to learn more.</p>
                </div>
               {
                   testMessages.map((message) => {
                       return (
                        <div className="unique__message">
                            <p>{message.messageContent}</p>
                            <div className="whose"></div>
                            <div className="message__info">
                                <span className="group__lastTime">{message.messageTime}</span>
                                <img src={message.messsageSeen} alt="" />
                            </div>
                        </div>
                       )
                   })
               }
            </div>
        </div>
    )
}

export default AllMessages
