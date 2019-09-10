import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <section>
      <article className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </article>
      <footer className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </footer>
    </section>
  );
};

export default VideoDetail;
