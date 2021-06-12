import React, { useState, useRef, useEffect } from 'react';
import '../styles/MessageSender.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import { Message } from '@material-ui/icons';
import Picker from 'emoji-picker-react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function MessageSender() {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const ref = useRef(null);
    const [message, setMessage] = useState('');
    const [isEmojiesOpen, setIsEmojiesOpen] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        const cursor = ref.current.selectionStart;
        const text = message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
        setMessage(text);
    };
    const showEmoji = (e) => {
        const emojiPanel = document.querySelector('.emojies');
        const fade = document.querySelector('.fadeEmoji');
        if(!isEmojiesOpen){
            emojiPanel.classList.add('emojiesActive');
            fade.style.display = "flex";
            setIsEmojiesOpen(true)
        }
        else{
            emojiPanel.classList.remove('emojiesActive');
            fade.style.display = "none";
            setIsEmojiesOpen(false);
        }
    }

    const hideEmojiBar = (e) => {
        const emojiPanel = document.querySelector('.emojies');
        const fade = document.querySelector('.fadeEmoji');
        if(isEmojiesOpen){
            emojiPanel.classList.remove('emojiesActive');
            fade.style.display = "none";
            setIsEmojiesOpen(false);
        }
    }
       
    useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    
    const onSelectFile = e => {
        const previewPanel = document.querySelector('.localimage__preview');
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
            setSelectedFile(e.target.files[0])
            previewPanel.classList.add('preview__active');
    }    

    const hideImagePreview = (e) => {
        const previewPanel = document.querySelector('.localimage__preview');
        previewPanel.classList.remove('preview__active');
        setSelectedFile(undefined);
        return
    }
   
    return (
        <div className="message__sender">
            <div className="fadeEmoji" onClick={hideEmojiBar}></div>
            <div className="message__senderOptionsLeft">
                <InsertEmoticonIcon onClick={showEmoji}/>
                <div className="send__localfile">
                    <AttachFileIcon/>
                    <input type='file' onChange={onSelectFile}  className="localfile__input"/>
                </div>
            </div>
            <div className="localimage__preview">
                {selectedFile &&  <img src={preview} className="image__preview"/> } 
                <input type="text" placeholder="Add caption" className="image__caption"/>  
                <div className="localimage__button">
                    <button id="send__localImage">Send Image</button>
                    <button id="cancel__localImage" onClick={hideImagePreview}>Cancel Sending</button>
                </div>
            </div>
            <input type="text" placeholder="Type a message" id="message" ref={ref} value={message} onChange={(e) => setMessage(e.target.value)}/>
            {message === '' ? <MicIcon/> : <SendRoundedIcon/>}
            <div className="emojies">
            <div className="emojies__panel">
            <Picker preload="true" pickerStyle={{width: "100%", boxShadow: "none"}} disableSearchBar="false" onEmojiClick={onEmojiClick} />
            </div>
            </div>
        </div>
    )
}

export default MessageSender



// const showImagePreview = (e) => {
//     const previewPanel = document.querySelector('.localimage__preview');
//     // const fade = document.querySelector('.fadeEmoji');
//     if(!selectedFile){
//         // fade.style.display = "flex";
//     }
//     else{
//         previewPanel.classList.remove('preview__active');
//         // fade.style.display = "none";
//     }
// }