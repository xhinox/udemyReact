import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelected={onVideoSelected}
      />
    );
  });

  return <aside className="ui relaxed divided list">{renderedList}</aside>;
};

export default VideoList;
