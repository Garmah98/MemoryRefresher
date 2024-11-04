import { useRef, useState } from 'react';
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { ProgressContext } from '../context/ProgressContext';

const DELAY = 2000;

export default function HoldButton({ children, className, ...props }) {
	const [progress, setProgress] = useState(0);
	const { removeCard } = useContext(CardContext);
	const { hideModal } = useContext(ProgressContext);
	const startTime = useRef(null);
	const holdRef = useRef(null);

	function handleRemove() {
		removeCard();
		hideModal();
	}

	function startTimer() {
		startTime.current = Date.now();
		holdRef.current = setInterval(() => {
			setProgress(Math.floor(((Date.now() - startTime.current) / DELAY) * 100));
			if (startTime.current && Date.now() - startTime.current > DELAY) {
				handleRemove();
				stopTimer();
			}
		}, 10);
	}
	function stopTimer() {
		startTime.current = null;
		setProgress(0);
		if (holdRef.current) {
			clearInterval(holdRef.current);
			holdRef.current = null;
		}
	}

	let stylingClasses = `m-1 p-2 text-first text-lg font-semibold border border-third rounded-md shadow-md hover:scale-95 bg-gradient-to-r from-black/15 to-black/15 bg-no-repeat `;
	stylingClasses += className;

	return (
		<button
			onMouseDown={startTimer}
			onMouseUp={stopTimer}
			onMouseLeave={stopTimer}
			{...props}
			className={stylingClasses}
			style={{ backgroundSize: `${progress}%` }}
		>
			{children}
		</button>
	);
}
