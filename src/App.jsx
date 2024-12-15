import Header from './components/Header'
import MainBoard from './components/MainBoard'
import CardModal from './components/CardModal'
import CreateCard from './components/CreateCard'
import { Provider } from 'react-redux'
import store from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

let persistor = persistStore(store)

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CreateCard />
                <CardModal />
                <Header />
                <MainBoard />
            </PersistGate>
        </Provider>
    )
}

export default App
