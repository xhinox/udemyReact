import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<section className="item" key={song.title}>
					<aside className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</aside>
					<article className="content">{song.title}</article>
				</section>
			);
		});
	}

	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { songs: state.songs };
};

export default connect(
	mapStateToProps,
	{
		selectSong: selectSong
	}
)(SongList);
