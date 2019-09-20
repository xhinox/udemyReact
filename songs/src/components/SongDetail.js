import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
	if (!song) {
		return <aside>Select a Song</aside>;
	}
	return (
		<section>
			<h3>Details for:</h3>
			<p>
				Title: {song.title}
				<br />
				Duration: {song.duration}
			</p>
		</section>
	);
};

const mapStateToProps = state => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
