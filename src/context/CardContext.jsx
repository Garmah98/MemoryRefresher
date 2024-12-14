import { createContext, useReducer, useEffect } from 'react'

export const CardContext = createContext({
    items: [],
    selectedItem: '',
    addCard: () => {},
    removeCard: () => {},
    handleSelectItem: () => {},
})

function cardReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items]
        updatedItems.push({
            id: action.payload.id,
            name: action.payload.name,
            language: action.payload.language,
            code: action.payload.code,
        })
        return {
            ...state,
            items: updatedItems,
        }
    }
    if (action.type === 'SELECT_ITEM') {
        const updatedItems = [...state.items]
        const selectedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.id
        )
        const selectedItem = updatedItems[selectedItemIndex]
        return {
            ...state,
            selectedItem: selectedItem,
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const updatedItems = [...state.items]
        const selectedItemIndex = updatedItems.findIndex(
            (item) => item.id === state.selectedItem.id
        )
        updatedItems.splice(selectedItemIndex, 1)
        return {
            ...state,
            items: updatedItems,
        }
    }
    return state
}

export default function CardContextProvider({ children }) {
    let cards = JSON.parse(localStorage.getItem('cards'))
    if (!cards) {
        cards = []
    }

    const [cardState, cardDispatch] = useReducer(cardReducer, {
        items: cards,
        selectedItem: [],
    })

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cardState.items))
    }, [cardState])

    function addCard(data) {
        cardDispatch({
            type: 'ADD_ITEM',
            payload: {
                id: Math.random(),
                name: data.name,
                language: data.language,
                code: data.code,
            },
        })
    }
    function removeCard(id) {
        cardDispatch({
            type: 'REMOVE_ITEM',
            payload: id,
        })
    }
    function handleSelectItem(id) {
        cardDispatch({
            type: 'SELECT_ITEM',
            payload: {
                id: id,
            },
        })
    }

    const ctxValue = {
        items: cardState.items,
        selectedItem: cardState.selectedItem,
        addCard: addCard,
        removeCard: removeCard,
        handleSelectItem: handleSelectItem,
    }

    return (
        <CardContext.Provider value={ctxValue}>{children}</CardContext.Provider>
    )
}
