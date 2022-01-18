import { Form } from 'react-bootstrap'
function Select({
	text = 'name label',
	name = 'name select',
	handleOnChange = null,
	value,
	textPadrao = 'Selecione um item',
	options,
	readOnly = false,
}) {
	return (
		<>
			<Form.Label style={{ marginTop: '1em' }}>{text}</Form.Label>
			<Form.Select
				name={name}
				onChange={handleOnChange}
				readOnly={readOnly}
				value={value}
			>
				{!options.length > 0 ? (
					<option value=''>{textPadrao}</option>
				) : (
					options.map((option) => (
						<option key={option.id} value={option.id}>
							{option.name}
						</option>
					))
				)}
			</Form.Select>
		</>
	)
}

export default Select
