const Statistics = ({ good, bad, neutral }) => {
	return (
		<div className="flex flex-col justify-center items-center mx-auto w-48 mt-5">
			<div className="w-44 flex text-center justify-between gap-10">
				<p className="font-bold size-8">Good: {good}</p>
				<p className="font-bold size-8">Bad: {bad}</p>
				<p className="font-bold size-8">Neutral: {neutral}</p>
			</div>
		</div>
	);
};

export default Statistics;
