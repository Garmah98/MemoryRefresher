import { useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'
import Button from '../UI/Button'
export default function Header() {
    const { createCard } = useContext(ProgressContext)
    return (
        <header className="flex w-full justify-between bg-first p-3">
            <h1 className="mr-1 text-3xl text-third">MemoryRefresher</h1>
            <Button className="w-32" onClick={createCard}>
                Create Card
            </Button>
        </header>
    )
}
