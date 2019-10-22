import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderList() {
		return this.props.streams.map(streams => {
			return (
				<article className="item" key={streams.id}>
					<i className="large middle aligned icon camera" />
					<div className="content">
						{streams.title}
						<div className="description">{streams.description}</div>
					</div>
				</article>
			);
		});
	}

	render() {
		return (
			<section>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { streams: Object.values(state.streams) };
};

export default connect(
	mapStateToProps,
	{ fetchStreams }
)(StreamList);
