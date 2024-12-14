import Header from './components/Header'
import MainBoard from './components/MainBoard'
import ProgressContextProvider from './context/ProgressContext'
import CardContextProvider from './context/CardContext'
import CardModal from './components/CardModal'
import CreateCard from './components/CreateCard'

function App() {
    return (
        <CardContextProvider>
            <ProgressContextProvider>
                <CreateCard />
                <CardModal />
                <Header />
                <MainBoard />
            </ProgressContextProvider>
        </CardContextProvider>
    )
}

export default App
