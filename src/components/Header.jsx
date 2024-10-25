import { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import Button from '../UI/Button';
export default function Header() {
	const { createCard } = useContext(ProgressContext);
	return (
		<header className='p-3 w-full bg-first flex justify-between'>
			<h1 className='text-3xl text-third'>MemoryRefresher</h1>
			<Button className='w-32' onClick={createCard}>
				Create Card 
			</Button>
		</header>
	);
}
