import { useEffect, useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { ProgressContext } from '../context/ProgressContext';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import Modal from './Modal';
import Button from '../UI/Button';
import HoldButton from '../UI/HoldButton';

export default function CardModal() {
	const { selectedItem } = useContext(CardContext);
	const { hideModal } = useContext(ProgressContext);

	useEffect(() => {
		Prism.highlightAll();
	});


	return (
		<Modal
			state='card'
			className='w-full md:w-2/3 bg-gradient-to-tr from-fourth from-25% to-third '
			onClose={hideModal}
		>
			<div className='w-full p-2'>
				<h2 className='text-3xl break-words'>{selectedItem.name}</h2>
				<p className='text-xl text-stone-300'>{selectedItem.language}</p>
				<pre>
					<code className={`language-${selectedItem.language}`}>
						{selectedItem.code}
					</code>
				</pre>
				<div className='flex justify-evenly'>
					<HoldButton className='w-1/4'>
						Hold to Remove
					</HoldButton>
					<Button onClick={hideModal} className='w-1/4'>
						Close
					</Button>
				</div>
			</div>
		</Modal>
	);
}
