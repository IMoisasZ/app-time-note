function TextArea({
	name = 'name textarea',
	text = 'name label',
	handleOnchange = null,
	placeholder = 'action text area',
	props,
}) {
	return (
		<div>
			<label htmlFor={name}>{text}</label>
			<textarea
				name=''
				id=''
				cols='30'
				rows='10'
				placeholder={placeholder}
				onChange={handleOnchange}>
				{props}
			</textarea>
		</div>
	)
}

export default TextArea
