export default function Input({
	label,
	id,
	textArea,
	select,
	register,
	required,
}) {
	let inputType = '';
	if (textArea) {
		inputType = (
			<textarea
				{...register(id, { required:true })}
				id={id}
				name={id}
				className='min-h-96 resize-none border border-black rounded-md'
			></textarea>
		);
	} else if (select) {
		inputType = (
			<select
				{...register(id, { required:true })}
				id={id}
				name={id}
				className='border w-1/2 p-2 border-black'
			>
				<option value='jsx'>Jsx</option>
				<option value='javascript'>Javascript</option>
			</select>
		);
	} else {
		inputType = (
			<input
				{...register(id, { required:true })}
				className='w-3/4 p-1  border border-solid border-black rounded-md'
				type='text'
				id={id}
				name={id}
			/>
		);
	}
	return (
		<div className='p-1 m-2 flex flex-col text-lg'>
			<label className='mb-2' htmlFor={id}>
				{label}
			</label>
			{inputType}
		</div>
	);
}
