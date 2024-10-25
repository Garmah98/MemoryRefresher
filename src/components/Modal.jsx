import { useRef, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ProgressContext } from '../context/ProgressContext';

export default function Modal({ children, state, onClose, className }) {
	const { progress } = useContext(ProgressContext);
	const dialog = useRef();
	useEffect(() => {
		const modal = dialog.current;
		if (state === progress) {
			modal.showModal();
		}
		return () => modal.close();
	}, [progress]);

	let stylingClasses =
		'w-2/3 p-2 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black backdrop:opacity-65 ';
	stylingClasses += className;

	return createPortal(
		<dialog onClose={onClose} className={stylingClasses} ref={dialog}>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
}
