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
import { ErrorMessage } from '@hookform/error-message'

type AuthData = {
    email: string
    password: string
    matchingPassword?: string
}

export default function Auth() {
    const [isSigning, setIsSigning] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AuthData>()
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
            try {
                await signInWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                )
                dispatch(authActions.login())
            } catch {}
        }
        // handleClose()
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
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => (
                            <span className="absolute left-1/3 text-error">
                                {message}
                            </span>
                        )}
                    />
                    <Input
                        whiteLabel
                        error={errors.email}
                        autoComplete="off"
                        label="Email"
                        id="email"
                        register={register('email', {
                            required: 'Email is required.',
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => (
                            <span className="absolute left-1/3 text-error">
                                {message}
                            </span>
                        )}
                    />
                    <Input
                        whiteLabel
                        error={errors.password}
                        type="password"
                        label="Password"
                        id="password"
                        register={register('password', {
                            required: 'Password is required',
                        })}
                    />
                    {isSigning && (
                        <>
                            <ErrorMessage
                                errors={errors}
                                name="matchingPassword"
                                render={({ message }) => (
                                    <span className="absolute left-1/3 text-error">
                                        {message}
                                    </span>
                                )}
                            />
                            <Input
                                whiteLabel
                                error={errors.matchingPassword}
                                type="password"
                                label="Confirm Password"
                                id="matchingPassword"
                                register={register('matchingPassword', {
                                    required: 'Confirming password is required',
                                })}
                            />
                        </>
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
                                type="button"
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
