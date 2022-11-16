import React, {useEffect, useState} from 'react';
import {getVideo} from "../../http/videoRequests";
import avatarImage from "../../images/avatar.jpg";
import "./videoPage.css"

const VideoPage = () => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        getVideo().then(v => {
            setUrl(v)
        });
    }, [])

    if (url.length === 0) {
        return null;
    }

    return (
        <div className="page-layout">
            <div className="videoContainer">
                <video controls>
                    <source src={url}/>
                </video>
                <p>VideoName</p>
                <div className="videoInfo">
                    <div className="channel-info">
                        <div className="avatar-and-name">
                            <img src={avatarImage} width={50} height={50}></img>
                            <p>ChannelName</p>
                        </div>
                        <button>Подписаться</button>
                    </div>
                </div>
                <p>Описание</p>
            </div>
        </div>
    )
}
export default VideoPage;