import VideoList from "./VideoList"
import VideoDetails from "../3.0 - Assets/Data/video-details.json"
import React from "react"

const MainVideo = (video) => {
    return (
        <li key={video.id} className="video">{video.title}</li>
    )
}

VideoDetails.filter(video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8").map(video => video.name)
let result = VideoDetails.filter(item => item.id === "84e96018-4022-434e-80bf-000ce4cd12b8");
console.log(result)

export default function DisplayMainVideo() {
    const formattedVideo = VideoDetails.map((video) => MainVideo(video));
    return <ul className="list">{formattedVideo}</ul>
}

