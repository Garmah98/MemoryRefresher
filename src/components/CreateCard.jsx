import Modal from './Modal';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { ProgressContext } from '../context/ProgressContext';

export default function CreateCard() {
	const { register, handleSubmit, reset } = useForm();
	const { addCard } = useContext(CardContext);
	const { hideModal } = useContext(ProgressContext);

	function handleClose() {
		reset();
		hideModal();
	}

	function onSubmit(data) {
		addCard(data);
		handleClose();
	}

	return (
		<Modal
			state='create'
			className='bg-gradient-to-tr from-fourth from-25% to-third '
			onClose={handleClose}
		>
			<form className='flex flex-col p-2' onSubmit={handleSubmit(onSubmit)}>
				<Input register={register} label='Card Title' id='name' />
				<Input register={register} select label='Language' id='language' />
				<Input register={register} textArea label='Code' id='code' />
				<div className='flex justify-evenly  p-1'>
					<Button textOnly type='button' onClick={handleClose} className='w-56'>
						Close
					</Button>
					<Button className='w-56 border-none'>Create Card</Button>
				</div>
			</form>
		</Modal>
	);
}
