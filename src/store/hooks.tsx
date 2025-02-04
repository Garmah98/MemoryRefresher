import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from './store'

type DispatchFunction = () => AppDispatch
export const useCardsDispatch: DispatchFunction = useDispatch
export const useCardsSelector: TypedUseSelectorHook<RootState> = useSelector
