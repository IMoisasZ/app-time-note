import { Form } from 'react-bootstrap'
function Input({
	text = 'name label',
	name = 'name input',
	type = 'type input',
	value = 'value input',
	placeholder = 'description input',
	handleOnChange = null,
	disabled = false,
}) {
	return (
		<>
			<Form.Label style={{ marginTop: '0.5em' }}>{text}</Form.Label>
			<Form.Control
				style={{ textAlign: 'center' }}
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={handleOnChange}
				disabled={disabled}
			/>
		</>
	)
}

export default Input
