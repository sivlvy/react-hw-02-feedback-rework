const Container = ({ children }) => {
	return (
		<div className="max-w-md border-2 border-slate-700 rounded-xl bg-yellow-50 mx-auto py-11 px-11 mt-20">
			{children}
		</div>
	);
};

export default Container;
