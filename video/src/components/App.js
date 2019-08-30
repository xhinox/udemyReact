import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <main className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>Videos found: {this.state.videos.length}</p>
        <VideoList videos={this.state.videos} />
      </main>
    );
  }
}

export default App;
