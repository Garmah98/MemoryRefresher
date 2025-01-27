import Modal from './Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useForm } from 'react-hook-form'

import { cardsActions } from '../store/CardsSlice'
import { progressActions } from '../store/ProgressSlice'
import { useDispatch } from 'react-redux'

export default function CreateCard() {
    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()

    function addCard(data) {
        dispatch(cardsActions.add(data))
    }

    function hideModal() {
        dispatch(progressActions.hideModal())
    }

    function handleClose() {
        reset()
        hideModal()
    }

    function onSubmit(data) {
        addCard(data)
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
                <Input register={register} label="Card Title" id="name" />
                <Input
                    register={register}
                    select
                    label="Language"
                    id="language"
                />
                <Input register={register} textArea label="Code" id="code" />
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
