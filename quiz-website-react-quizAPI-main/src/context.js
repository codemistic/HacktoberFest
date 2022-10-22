import axios from "axios";
import React, { useState, useContext } from "react";

const table = {
	sports: 21,
	history: 23,
	politics: 24
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

// const url = "";
// const tempUrl =
// 	"https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true);
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [error, setError] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [quiz, setQuiz] = useState({
		amount: 10,
		category: "sports",
		difficulty: "easy"
	});
	const fetchQuestions = async (url) => {
		setLoading(true);
		setWaiting(false);
		const response = await axios(url).catch((err) => console.log(err));
		if (response) {
			const data = response.data.results;
			if (data.length > 0) {
				setQuestions(data);
				setLoading(false);
				setWaiting(false);
				setError(false);
			} else {
				setWaiting(true);
				setError(true);
			}
		}
	};
	const nextQuestion = () => {
		setIndex((prevIndex) => {
			const newIndex = prevIndex + 1;
			if (newIndex === questions.length) {
				openModal();
				return 0;
			}
			return newIndex;
		});
	};
	const checkAnswer = (value) => {
		if (value) {
			setCorrect((prevCorrect) => prevCorrect + 1);
		}
		nextQuestion();
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setWaiting(true);
		setCorrect(0);
		setIsModalOpen(false);
	};
	const handleChange = (e) => {
		e.persist();
		console.log(e.target);
		console.log(e.target.name, e.target.value);

		setQuiz((prevQuiz) => {
			return { ...prevQuiz, [e.target.name]: e.target.value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { amount, category, difficulty } = quiz;
		const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
		fetchQuestions(url);
	};
	return (
		<AppContext.Provider
			value={{
				waiting,
				error,
				loading,
				questions,
				index,
				correct,
				isModalOpen,
				nextQuestion,
				checkAnswer,
				closeModal,
				quiz,
				setQuiz,
				handleChange,
				handleSubmit
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
