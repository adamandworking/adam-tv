import React, { useEffect, useRef, useState } from "react"
import srcVideo from '../video/sample-mp4-file.mp4'

const VideoWrapper = () => {
    // const [isMuted, SetIsMuted] = useState(true)

    // useEffect(() => {
    //     SetIsMuted(false)
    //   }, [])
    
    return (
        <div className="h-full flex-grow bg-gray-800">
            <div className="h-full flex justify-center items-center bg-gray-800">
                <video className=" w-full " controls>
                    <source src={srcVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default VideoWrapper;
