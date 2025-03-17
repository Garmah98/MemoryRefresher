import Modal from './Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useForm } from 'react-hook-form'
import { progressActions } from '../store/ProgressSlice'
import { useCardsDispatch } from '../store/hooks'
import { useCardsSelector } from '../store/hooks'
import { sendCardData } from '../store/card-Actions'
import { Card } from '../store/CardsSlice'

export default function CreateCard() {
    const { register, handleSubmit, reset } = useForm<Card>()

    const dispatch = useCardsDispatch()
    const userId = useCardsSelector((state) => state.auth.userId!)

    function addCard(data: Card) {
        dispatch(sendCardData({ userId, data }))
    }

    function handleClose() {
        reset()
        dispatch(progressActions.hideModal())
    }

    function onSubmit(data: Card) {
        addCard({
            id: Math.random(),
            name: data.name,
            language: data.language,
            code: data.code,
        })
        handleClose()
    }

    return (
        <Modal
            state="create"
            className="w-full bg-gradient-to-tr from-fourth from-25% to-third md:w-2/3"
            onClose={handleClose}
        >
            <form
                className="flex flex-col p-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    register={register('name', {
                        required: 'Please provide name of your card',
                    })}
                    label="Card Title"
                    id="name"
                />
                <Input
                    register={register('language', {
                        required: 'Please select language of your code',
                    })}
                    select
                    label="Language"
                    id="language"
                />
                <Input
                    register={register('code', {
                        required: 'Please provide your code',
                    })}
                    textArea
                    label="Code"
                    id="code"
                />
                <div className="flex justify-evenly p-1">
                    <Button
                        textOnly
                        type="button"
                        onClick={handleClose}
                        className="w-56"
                    >
                        Close
                    </Button>
                    <Button className="w-56 border-none">Create Card</Button>
                </div>
            </form>
        </Modal>
    )
}
