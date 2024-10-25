import { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import { CardContext } from '../context/CardContext';

export default function Card({ title, language, id }) {
	const { showModal } = useContext(ProgressContext);
	const { handleSelectItem } = useContext(CardContext);
	function handleButton() {
		showModal();
		handleSelectItem(id);
	}
	return (
		<div className='m-2 h-32 shadow-2xl rounded-lg bg-gradient-to-tr from-fourth to-third'>
			<button
				onClick={() => handleButton()}
				className='break-all w-full h-full p-2 rounded-lg'
			>
				<h2 className='text-2xl'>{title}</h2>
				<p className='text-stone-800 text-xl'>{language}</p>
			</button>
		</div>
	);
}
