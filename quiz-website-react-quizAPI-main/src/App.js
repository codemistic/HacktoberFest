import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
	const {
		waiting,
		loading,
		questions,
		index,
		correct,
		nextQuestion,
		checkAnswer
	} = useGlobalContext();
	if (waiting) {
		return <SetupForm />;
	}
	if (loading) {
		return <Loading />;
	}
	const { question, incorrect_answers, correct_answer } = questions[index];
	const answers = [...incorrect_answers, correct_answer];
	const tempIndex = Math.floor(Math.random() * 4);
	let tempElement = answers[tempIndex];
	answers[tempIndex] = correct_answer;
	answers[answers.length - 1] = tempElement;
	return (
		<main>
			<Modal />

			<section className="quiz">
				<p className="correct-answers">
					{" "}
					correct answers :{correct}/{index}
				</p>
				<article className="container">
					<h2 dangerouslySetInnerHTML={{ __html: question }} />
					<div className="btn-container">
						{answers.map((answer, index) => {
							return (
								<button
									key={index}
									className="answer-btn"
									dangerouslySetInnerHTML={{
										__html: answer
									}}
									onClick={() => {
										checkAnswer(correct_answer === answer);
									}}
								/>
							);
						})}
					</div>
				</article>
				<button className="next-question" onClick={nextQuestion}>
					next question
				</button>
			</section>
		</main>
	);
}

export default App;
