import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="d-flex justify-content-center">
      <video width="640" height="360" controls style={{filter:' drop-shadow(0 0 4px RGBA(200, 200, 200, 0.5))'}}>
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default VideoPlayer;