// src/VideoList.js

import React from 'react';

const VideoList = () => {
  // Sample data for videos
  const videos = [
    { id: 1, title: 'Video 1', description: 'This is a description for video 1' },
    { id: 2, title: 'Video 2', description: 'This is a description for video 2' },
    { id: 3, title: 'Video 3', description: 'This is a description for video 3' },
  ];

  return (
    <div className="video-list">
      <h2>Trending Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;