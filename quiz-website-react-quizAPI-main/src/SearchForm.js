import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
	const { query, handleChange } = useGlobalContext();
	return (
		<form
			action=""
			className="search-form"
			onSubmit={(e) => e.preventDefault()}
		>
			<h2>search hacker news </h2>
			<input
				type="text"
				className="form-input"
				value={query}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
