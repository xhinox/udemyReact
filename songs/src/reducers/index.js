import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "Finnese", duration: "4.05" },
		{ title: "Versace on the floor", duration: "5.12" },
		{ title: "Lazy song", duration: "2.05" },
		{ title: "24k magic", duration: "4.32" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
