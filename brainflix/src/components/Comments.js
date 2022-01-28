import React from 'react';
import Comment from '../Assets/Icons/add_comment.svg'
import Mohan from "../Assets/Images/Mohan-muruge.jpg"
import "./Comment.css"
import VidDetails from "../Assets/Data/video-details.json";
import smallDetails from "../Assets/Data/videos.json"

class Comments extends React.Component {
    state = {
        VidDetails
    }

    componentDidMount() {
        fetch("../Assets/Data/video-details.json")
        .then(response => response.json())
        .then( result => this.setState({comments: result.comments[0]}))
    }

    
    render() {
        

        return(
            <section className='Comments'>
                <form onSubmit={this.handleSubmit} className='comment-form'>
                
                <br />
                    <input type="image" className='comment-form__image' src={Mohan} />
                    <div className='comment-form__input-container'>
                    <label>JOIN THE CONVERSATION</label>
                    <input type="text" onChange={this.handleChange} className='comment-form__input'placeholder='Add a new comment'/>
                    <button type='submit' className='comment-form__button'><img src={Comment}></img>Comment</button>
                    </div>
                </form>
                <br />
                
                {this.state.VidDetails.map((video) => (
                    <div key={video.id} className="next-videos__list-list">
                            <ul className="next-videos__list-item">{video.comments.map((comment) => (
                                <li>{comment.name}</li>,
                                <li>{comment.comment}</li>
                            ))}
                            </ul>
                    </div>
                ))}

            </section>
        )
    }
}

export default Comments;