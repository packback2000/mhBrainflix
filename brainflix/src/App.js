import Header from './components/Header';
import VideoList from './components/VideoList';
import ReactDOM from 'react-dom';
import React from 'react';
import vidlist from './3.0 - Assets/Data/video-details.json';
import Comments from './components/Comments';
import VideoPlayer from './components/VidepPlayer';


function App() { 
  return (
    <div className="App">
      <Header /> 
      <VideoPlayer />
      <Comments />
      <VideoList />
    </div>
  );
}

export default App;
