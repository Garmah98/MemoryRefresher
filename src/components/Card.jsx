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
		<div className='w-full h-32 md:h-64 lg:h-44 shadow-2xl rounded-lg bg-gradient-to-tr from-fourth to-third'>
			<button
				onClick={() => handleButton()}
				className='relative break-all w-full h-full p-2 rounded-lg'
			>
				<h2 className='text-2xl'>{title}</h2>
				<p className='text-stone-800 absolute right-2 bottom-2 text-xl'>{language}</p>
			</button>
		</div>
	);
}
