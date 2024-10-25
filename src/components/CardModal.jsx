import { useEffect, useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { ProgressContext } from '../context/ProgressContext';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import Modal from './Modal';
import Button from '../UI/Button';

export default function CardModal() {
	const { removeCard, selectedItem } = useContext(CardContext);
	const { hideModal } = useContext(ProgressContext);

	useEffect(() => {
		Prism.highlightAll();
	});
	function handleRemoval() {
		hideModal();
		removeCard();
	}

	return (
		<Modal
			state='card'
			className='bg-gradient-to-tr from-fourth from-25% to-third '
			onClose={hideModal}
		>
			<div className='w-full p-2'>
				<h2 className='text-3xl'>{selectedItem.name}</h2>
				<p className='text-xl text-stone-300'>{selectedItem.language}</p>
				<pre>
					<code className={`language-${selectedItem.language}`}>
						{selectedItem.code}
					</code>
				</pre>
				<div className='flex justify-evenly'>
					<Button onClick={handleRemoval} textOnly className='w-1/4'>
						Remove
					</Button>
					<Button onClick={hideModal} className='w-1/4'>
						Close
					</Button>
				</div>
			</div>
		</Modal>
	);
}
