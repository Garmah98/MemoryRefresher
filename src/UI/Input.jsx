export default function Input({
    label,
    id,
    textArea,
    select,
    register,
    required,
}) {
    let inputType = ''
    if (textArea) {
        inputType = (
            <textarea
                {...register(id, { required: true })}
                id={id}
                name={id}
                className="min-h-96 resize-none rounded-md border border-black"
            ></textarea>
        )
    } else if (select) {
        inputType = (
            <select
                {...register(id, { required: true })}
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
                {...register(id, { required: true })}
                className="w-3/4 rounded-md border border-solid border-black p-1"
                type="text"
                id={id}
                name={id}
                maxLength="86"
            />
        )
    }
    return (
        <div className="m-2 flex flex-col p-1 text-lg">
            <label className="mb-2" htmlFor={id}>
                {label}
            </label>
            {inputType}
        </div>
    )
}
