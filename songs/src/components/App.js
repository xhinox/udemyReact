import React from "react";

import SongList from "./SongList";

const App = () => {
	return (
		<main className="ui container grid">
			<article className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
			</article>
		</main>
	);
};

export default App;
