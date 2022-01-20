import { Form } from 'react-bootstrap'

function TextArea({
	name = 'name textarea',
	text = 'name label',
	value,
	handleOnchange = null,
	placeholder = 'action text area',
}) {
	return (
		<>
			<Form.Group>
				<Form.Label>{text}</Form.Label>
				<Form.Control
					as='textarea'
					rows={2}
					name={name}
					id={name}
					value={value}
					placeholder={placeholder}
					onChange={handleOnchange}
				/>
			</Form.Group>
		</>
	)
}

export default TextArea
