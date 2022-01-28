import React from "react";
import MainVidDetails from "../3.0 - Assets/Data/videos.json"
import "./VideoList.css"
import AllVidDetails from "../Assets/Data/video-details.json"

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MainVidDetails
        }
    }
 
    componentDidMount() {
        fetch(MainVidDetails)
        .then((response) => response.json())
        .then(videoList => this.setState({MainVidDetails: videoList}))
    }

    render() {
        return (
            <section className="next-videos__list">
                
                {this.state.MainVidDetails.map((video) => (
                    <ul key={video.id} className="next-videos__list-list">
                            
                        <div className="next-video__image-container">
                            <li className="next-videos__list-item"><img className="next-videos__list-image" src={video.image} /></li>
                            </div>
                        <div className="next-video__content-container">
                            <li className="next-videos__list-item">{video.title}</li>
                            <li className="next-videos__list-item">{video.channel}</li>
                        </div>
                    </ul>
                ))}
            </section>
        )
    }
}

export default VideoList;