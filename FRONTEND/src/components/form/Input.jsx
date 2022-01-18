import { Form } from 'react-bootstrap'
function Input({
	text = 'name label',
	name = 'name input',
	type = 'type input',
	value = 'value input',
	placeholder = 'description input',
	handleOnChange = null,
}) {
	return (
		<>
			<Form.Label style={{ marginTop: '1em' }}>{text}</Form.Label>
			<Form.Control
				style={{ textAlign: 'center' }}
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={handleOnChange}
			/>
		</>
	)
}

export default Input
