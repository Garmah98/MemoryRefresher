import { ComponentPropsWithoutRef, type ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
    label: string
    id: string
    whiteLabel?: boolean
    textArea?: boolean
    select?: boolean
    register: UseFormRegisterReturn
} & ComponentPropsWithoutRef<'input'>

export default function Input({
    label,
    whiteLabel,
    id,
    textArea,
    select,
    register,
    ...props
}: InputProps) {
    let inputType: ReactNode
    if (textArea) {
        inputType = (
            <textarea
                {...register}
                id={id}
                name={id}
                className="min-h-96 resize-none rounded-md border border-black"
            ></textarea>
        )
    } else if (select) {
        inputType = (
            <select
                {...register}
                id={id}
                name={id}
                className="w-1/2 border border-black p-2"
            >
                <option value="jsx">Jsx</option>
                <option value="javascript">Javascript</option>
                <option value="typescript">Typescript</option>
            </select>
        )
    } else {
        inputType = (
            <input
                {...register}
                {...props}
                className="w-3/4 rounded-md border border-solid border-black p-1"
                id={id}
                name={id}
                maxLength={86}
            />
        )
    }
    return (
        <div className="m-2 flex flex-col p-1 text-lg">
            <label
                className={whiteLabel ? 'mb-2 text-white' : 'mb-2'}
                htmlFor={id}
            >
                {label}
            </label>
            {inputType}
        </div>
    )
}
