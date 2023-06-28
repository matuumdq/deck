// eslint-disable-next-line react/prop-types
const ToggleSwitch = ({ checked, onChange }) => {
	return (
		<label
			htmlFor="Toggle1"
			className="inline-flex items-center justify-center space-x-4 cursor-pointer absolute top-24 right-6"
		>
			<img
				src="https://th.bing.com/th/id/OIP.iFMqX-nFlh1fIw8f7rUsBgAAAA?pid=ImgDet&rs=1"
				alt="esp"
				className="h-4 w-auto"
			/>
			<span className="relative">
				<input
					id="Toggle1"
					type="checkbox"
					className="hidden peer"
					checked={checked}
					onChange={onChange}
				/>
				<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-teak-400"></div>
				<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-teak-600"></div>
			</span>
			<img
				src="https://th.bing.com/th/id/OIP.rOaEWsHLIbgwfP69IO4JUAHaEK?pid=ImgDet&rs=1"
				alt="esp"
				className="h-4 w-auto"
			/>
		</label>
	);
};

export default ToggleSwitch;
