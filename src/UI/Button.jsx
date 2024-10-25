export default function Button({ children, className, textOnly, ...props }) {
	let stylingClasses =
		'p-2 rounded-md text-first text-lg bg-third shadow-md font-semibold ';
	stylingClasses += className;
	if (textOnly) {
		stylingClasses =
			'p-2 text-first text-lg font-semibold border border-third rounded-md shadow-md ';
		stylingClasses += className;
	}
	return (
		<button {...props} className={stylingClasses}>
			{children}
		</button>
	);
}
