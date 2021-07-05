import React from 'react';
import Chatbox from './Chatbox';
import VideoWrapper from './VideoWrapper';

const MainContent = ({socket}) => {
    return (
        <div className=" h-full flex flex-col lg:flex-row">
            <VideoWrapper/>
            <Chatbox socket={socket}/>
        </div>
    );
}

export default MainContent;
