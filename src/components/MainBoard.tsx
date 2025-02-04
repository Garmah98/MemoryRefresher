import Card from './Card'
import { useCardsSelector } from '../store/hooks'

export default function MainBoard() {
    const items = useCardsSelector((state) => state.cards.items)

    return (
        <main>
            <ol className="m-1 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <Card
                                id={item.id}
                                title={item.name}
                                language={item.language}
                            />
                        </li>
                    )
                })}
            </ol>
        </main>
    )
}
