import Card from './Card';
import { useContext} from 'react';
import { CardContext } from '../context/CardContext';


export default function MainBoard() {

	const { items } = useContext(CardContext);


	return (
		<main className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 m-1 '>
			{items.map((item) => {
				return (
					<Card
						key={item.id}
						id={item.id}
						title={item.name}
						language={item.language}
					/>
				);
			})}
		</main>
	);
}
