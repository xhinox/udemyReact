import axios from "axios";

const KEY = "AIzaSyAzvErUIXGb0MAzKj-Ah1Txez2o5WcuAhg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
