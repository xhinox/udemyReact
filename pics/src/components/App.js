import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = term => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
        per_page: 5
      },
      headers: {
        Authorization:
          "Client-ID 806a25804f6148e3ffef28ef232c6934b037ff26eab81f527623ca8234f3b6ff"
      }
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
