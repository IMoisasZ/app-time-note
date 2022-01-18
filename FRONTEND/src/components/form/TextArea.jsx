function TextArea({
	name = 'name textarea',
	text = 'name label',
	handleOnchange = null,
	placeholder = 'action text area',
	props,
	cols = '30',
	rows = '10',
}) {
	return (
		<div>
			<label htmlFor={name}>{text}</label>
			<textarea
				name=''
				id=''
				cols={cols}
				rows={rows}
				placeholder={placeholder}
				onChange={handleOnchange}
			>
				{props}
			</textarea>
		</div>
	)
}

export default TextArea
