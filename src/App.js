import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [number, setNumber] = useState(1);
	const [output, setOutput] = useState("");
	const [lightMode, setLightMode] = useState(true);
	const [guess, setGuess] = useState("");
	const [guessOutput, setGuessOutput] = useState(false);

	useEffect(() => {
		console.log("use Effect triggered");
		if (number % 3 === 0 && number % 5 === 0) {
			setOutput("fizzbuz");
		} else if (number % 3 === 0) {
			setOutput("fizz");
		} else if (number % 5 === 0) {
			setOutput("buzz");
		} else {
			setOutput(number.toString());
		}
	}, [number]);

	const handleInc = () => {
		setNumber(number + 1);
		setGuess("");
		setGuessOutput(false);
	};

	const handleDec = () => {
		setNumber(number - 1);
		setGuess("");
		setGuessOutput(false);
	};

	const handleLightMode = () => {
		setLightMode((prev) => !prev);
	};

	const handleGuess = (event) => {
		const { value } = event.target;
		setGuess(value);
		if (value.toLowerCase() === output) {
			setGuessOutput(true);
		}
	};

	return (
		<div className={lightMode ? "light-mode" : "dark-mode"}>
			<button value={number} onClick={handleInc}>
				+
			</button>
			<button value={number} onClick={handleDec}>
				-
			</button>

			<h2>Number is: {number}</h2>
			<h2>Output is: {guessOutput && output}</h2>
			<label placeholder="Enter your answer:">User Guess</label>
			<input
				type="text"
				value={guess}
				onChange={handleGuess}
				name="guess"
			/>
			<button onClick={handleLightMode}>
				{lightMode ? "dark-mode" : "light-mode"}
			</button>
		</div>
	);
}

export default App;
