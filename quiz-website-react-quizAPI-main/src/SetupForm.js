import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
	const { quiz, error, handleChange, handleSubmit } = useGlobalContext();
	const { amount, category, difficulty } = quiz;
	console.log(quiz);
	return (
		<main>
			<section className="quiz quiz-small">
				<form action="" className="setup-form">
					<h2>setup quiz</h2>
					<div className="form-control">
						<label htmlFor="amount">number of questions</label>
						<input
							type="number"
							name="amount"
							id="amount"
							className="form-input"
							min="1"
							max="50"
							value={amount}
							onChange={handleChange}
						/>
					</div>
					{error && (
						<p className="error">
							can't generate questions, please try different
							options
						</p>
					)}
					<div className="form-control">
						<label htmlFor="category">category</label>
						<select
							name="category"
							id="category"
							className="form-input"
							value={category}
							onChange={handleChange}
						>
							<option value="sports">sports</option>
							<option value="history">history</option>
							<option value="politics">politics</option>
						</select>
					</div>
					<div className="form-control">
						<label htmlFor="difficulty">difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							className="form-input"
							value={difficulty}
							onChange={handleChange}
						>
							<option value="easy">easy</option>
							<option value="medium">medium</option>
							<option value="hard">hard</option>
						</select>
					</div>
					<button
						type="submit"
						className="submit-btn"
						onClick={handleSubmit}
					>
						start
					</button>
				</form>
			</section>
		</main>
	);
};

export default SetupForm;
