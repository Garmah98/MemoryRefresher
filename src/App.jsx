import Header from './components/Header'
import MainBoard from './components/MainBoard'
import CardModal from './components/CardModal'
import CreateCard from './components/CreateCard'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
    return (
        <Provider store={store}>
            <CreateCard />
            <CardModal />
            <Header />
            <MainBoard />
        </Provider>
    )
}

export default App
