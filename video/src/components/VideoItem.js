import "../css/VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelected }) => {
  return (
    <article className="video-item item" onClick={() => onVideoSelected(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <header className="header">{video.snippet.title}</header>
        <div className="description">{video.snippet.description}</div>
      </div>
    </article>
  );
};

export default VideoItem;
