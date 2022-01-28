import React from "react";
import Play from "../Assets/Icons/play.svg"
import FullScreen from "../Assets/Icons/fullscreen.svg"
import CloseFullScreen from "../Assets/Icons/close_fullscreen.svg"
import VolumeUp from "../Assets/Icons/volume_up.svg"
import VolumeOff from "../Assets/Icons/volume_off.svg"
import CurrentVideo from "../Assets/Data/videos.json"
import "./VideoPlayer.css"

function VideoPlayer() {

    return(
        <section className="video-player__container">
        <video controls poster={CurrentVideo[0].image}>
        </video>
        </section>
    )
}

export default VideoPlayer;