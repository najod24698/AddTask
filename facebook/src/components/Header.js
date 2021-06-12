import React, { useState } from 'react';
import '../styles/Header.css';
import statusLogo from '../assets/status.svg';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [isDotsExpanded, setIsDotsExpanded] = useState(false);
    const expandDots = (e) => {
        const dots = document.querySelector('.dots');
        const expandedDots = document.querySelector('.expanded__dots');
        const fade = document.querySelector('.fade');
       if(!isDotsExpanded){
        dots.classList.add("avtiveDot");
        expandedDots.classList.add('expanded__dotsActive');
        fade.style.display = "flex";
        setIsDotsExpanded(true);
       }
       else{
        dots.classList.remove("avtiveDot");
        expandedDots.classList.remove('expanded__dotsActive');
        fade.style.display = "none";
        setIsDotsExpanded(false);
       }
    }

    const minimizeDots = (e) => {
        const dots = document.querySelector('.dots');
        const expandedDots = document.querySelector('.expanded__dots');
        const fade = document.querySelector('.fade');
        if(isDotsExpanded){
            expandedDots.classList.remove('expanded__dotsActive');
            fade.style.display = "none";
            dots.classList.remove("avtiveDot");
            setIsDotsExpanded(false);
        }
    }
    return (
        <div className="header">
            <div className="fade" onClick={minimizeDots}></div>
            <div className="header__avatar">
                <Avatar alt="Remy Sharp" src="" />
            </div>
            <div className="header__options">
                <img src={statusLogo}/>
                <ChatIcon/>
                <div className="dots">
                    <MoreVertIcon onClick={expandDots}/>
                </div>
            </div>

            <div className="expanded__dots">
                <ul className="expanded__collection">
                    <li className="expanded__collectionItem">
                        <Link>
                            <span>New group</span>
                        </Link>
                    </li>
                    <li className="expanded__collectionItem">
                        <Link>
                            <span>Create a room</span>
                        </Link>
                    </li>
                    <li className="expanded__collectionItem">
                        <Link>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="expanded__collectionItem">
                        <Link>
                            <span>Archived</span>
                        </Link>
                    </li>
                    <li className="expanded__collectionItem">
                        <Link>
                            <span>Starred</span>
                        </Link>
                    </li>
                    <li className="expanded__collectionItem">
                        <Link>
                            <span>Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
