import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH
} from "./actions";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: true };
		case SET_STORIES:
			const { nbPages, hits } = action.payload;
			return { ...state, isLoading: false, nbPages, hits };
		case REMOVE_STORY:
			const id = action.payload;
			const newHits = state.hits.filter((item) => item.objectID !== id);
			console.log(newHits);
			return {
				...state,
				hits: newHits
			};

		case HANDLE_SEARCH:
			return { ...state, query: action.payload, page: 0 };
		case HANDLE_PAGE:
			if (action.payload === "dec") {
				let newPage = state.page - 1;
				if (newPage < 0) newPage = state.nbPages - 1;
				return { ...state, page: newPage };
			}
			if (action.payload === "inc") {
				let newPage = state.page + 1;
				console.log(newPage);
				if (newPage === state.nbPages) newPage = 0;
				return { ...state, page: newPage };
			}
			return;
		default:
			throw new Error(`No matching "${action.type}" action type`);
	}
};
export default reducer;
