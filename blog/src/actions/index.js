import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUser = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	// forma1
	// const userIds = _.uniq(_.map(getState().posts, "userId"));
	// userIds.forEach(id => dispatch(fetchUser(id)));

	// forma2
	_.chain(getState().posts) //primero hace el getstate
		.map("userId") // luego hace el map
		.uniq() // determina los unique
		.forEach(id => dispatch(fetchUser(id))) //hace el foreac
		.value(); // y por ultimo executa la cadena
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get("/posts");
	dispatch({
		type: "FETCH_POSTS",
		payload: response.data
	});
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({
		type: "FETCH_USER",
		payload: response.data
	});
};
