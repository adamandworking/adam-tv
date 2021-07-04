import React from 'react';
import Chatbox from './Chatbox';
import VideoWrapper from './VideoWrapper';

const MainContent = ({socket}) => {
    return (
        <div className=" h-full flex">
            <VideoWrapper/>
            <Chatbox socket={socket}/>
        </div>
    );
}

export default MainContent;
