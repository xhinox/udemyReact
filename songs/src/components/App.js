import React from "react";

import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
	return (
		<main className="ui container grid">
			<article className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</article>
		</main>
	);
};

export default App;
