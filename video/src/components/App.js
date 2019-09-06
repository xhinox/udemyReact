import React from "react";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelected = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <main className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>Videos found: {this.state.videos.length}</p>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelected={this.onVideoSelected}
        />
      </main>
    );
  }
}

export default App;
