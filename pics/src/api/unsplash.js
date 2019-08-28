import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 806a25804f6148e3ffef28ef232c6934b037ff26eab81f527623ca8234f3b6ff"
  }
});
