import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext();
	if (isLoading) {
		return <div className="loading"></div>;
	}
	return (
		<section className="stories">
			{hits.map((item) => {
				const {
					author,
					objectID: id,
					num_comments: comments,
					title,
					points,
					url
				} = item;
				return (
					<article key={id} className="story">
						<h4 className="title">{title}</h4>
						<p className="info">
							{points} points by
							<span>{author} | </span>
							{comments} comments
						</p>
						<div>
							<a
								href={url}
								className="read-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								read more
							</a>
							<button
								className="remove-btn"
								onClick={() => removeStory(id)}
							>
								remove
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;
