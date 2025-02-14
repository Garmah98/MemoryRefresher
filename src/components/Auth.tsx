import Modal from './Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { progressActions } from '../store/ProgressSlice'
import { useCardsDispatch } from '../store/hooks'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { auth } from '../util/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authActions } from '../store/AuthSlice'

type AuthData = {
    email: string
    password: string
    matchingPassword?: string
}

export default function Auth() {
    const [isSigning, setIsSigning] = useState(false)
    const { register, handleSubmit, reset } = useForm<AuthData>()
    const dispatch = useCardsDispatch()

    function hideModal() {
        dispatch(progressActions.hideModal())
        reset()
    }
    function handleClose() {
        setIsSigning(false)
        hideModal()
        reset()
    }
    function handleSignUp() {
        setIsSigning((prevState) => !prevState)
        reset()
    }
    async function onSubmit(data: AuthData) {
        if (isSigning) {
            if (data.matchingPassword !== data.password) {
                return
            }
            try {
                await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                )
            } catch (error: any) {}
        } else if (!isSigning) {
            signInWithEmailAndPassword(auth, data.email, data.password)
            dispatch(authActions.login())
        }
        handleClose()
    }
    return (
        <>
            <Modal
                state="auth"
                onClose={hideModal}
                className={`h-auto w-1/2 overflow-hidden bg-[#333]`}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative h-full"
                >
                    <Input
                        whiteLabel
                        autoComplete="off"
                        label="Email"
                        id="email"
                        register={register('email', {
                            required: 'Email is required.',
                        })}
                    />
                    <Input
                        whiteLabel
                        type="password"
                        label="Password"
                        id="password"
                        register={register('password', {
                            required: 'Password is required',
                        })}
                    />
                    {isSigning && (
                        <Input
                            whiteLabel
                            type="password"
                            label="Confirm Password"
                            id="matchingPassword"
                            register={register('matchingPassword', {
                                required: 'Confirming password is required',
                            })}
                        />
                    )}
                    <div className="absolute bottom-4 flex w-full flex-col">
                        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">
                            <Button
                                className="mb-4 w-44 lg:mb-0"
                                type="button"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button className="w-44">
                                {isSigning ? 'Sign up' : 'Login'}
                            </Button>
                        </div>
                        <p className="mt-5 text-center text-neutral-400">
                            {isSigning
                                ? 'Already have account? '
                                : "Don't have account yet? "}
                            <button
                                className="underline"
                                onClick={handleSignUp}
                            >
                                {isSigning ? 'Login here' : 'Sign up here'}
                            </button>
                        </p>
                    </div>
                </form>
            </Modal>
        </>
    )
}
