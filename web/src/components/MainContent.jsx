import React from 'react';
import Chatbox from './Chatbox';
import VideoList from './VideoList';
import VideoWrapper from './VideoWrapper';

const MainContent = ({socket}) => {
    return (
        <div className="flex flex-row">
            <VideoList/>
            <VideoWrapper/>
            <Chatbox socket={socket}/>
        </div>
    );
}

export default MainContent;
