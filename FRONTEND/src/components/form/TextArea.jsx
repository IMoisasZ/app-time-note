import { Form } from 'react-bootstrap'

function TextArea({
	name = 'name textarea',
	text = 'name label',
	handleOnchange = null,
	placeholder = 'action text area',
}) {
	return (
		<>
			<Form.Group className='mb-3'>
				<Form.Label>{text}</Form.Label>
				<Form.Control
					as='textarea'
					rows={3}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={handleOnchange}
				/>
			</Form.Group>
		</>
	)
}

export default TextArea
