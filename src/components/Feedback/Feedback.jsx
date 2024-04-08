import React, { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';

const Feedback = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const total = good + neutral + bad;

	const positiveVotes = () => {
		if (good === 0) {
			return 0;
		}
		return ((good / total) * 100).toFixed();
	};

	return (
		<>
			<h2 className=" bg-lime-500 block mx-auto w-48 py-2 text-center mt-5 rounded-lg text-green-800 font-bold">
				Please leave feedback
			</h2>
			<div className="flex justify-center gap-6 mt-10">
				<button
					onClick={() => setGood(good + 1)}
					className="text-green-800 font-bold relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
               before:absolute before:w-full before:transition-all before:duration-300 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 "
				>
					Good
				</button>
				<button
					onClick={() => setNeutral(neutral + 1)}
					className="text-green-800 font-bold relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
               before:absolute before:w-full before:transition-all before:duration-300 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 "
				>
					Neutral
				</button>
				<button
					onClick={() => setBad(bad + 1)}
					className="text-green-800 font-bold relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
               before:absolute before:w-full before:transition-all before:duration-300 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 "
				>
					Bad
				</button>
			</div>
			<h2 className=" bg-lime-500 block mx-auto w-48 py-2 text-center mt-10 rounded-lg text-green-800 font-bold">
				Statistics
			</h2>
			{total === 0 ? (
				'No feedback right now'
			) : (
				<Statistics good={good} neutral={neutral} bad={bad} />
			)}
			<p className="text-center mt-8 font-bold w-36 h-10 text-center flex items-center justify-center mx-auto rounded-md border-lime-500 border-2">
				Total: {total}
			</p>
			<p className="text-center mt-8 font-bold w-44 h-10 text-center flex items-center justify-center mx-auto rounded-md border-lime-500 border-2">
				Positive votes: {positiveVotes()}%
			</p>
		</>
	);
};

export default Feedback;
