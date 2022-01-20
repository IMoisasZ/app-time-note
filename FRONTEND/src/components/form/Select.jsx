import { Form } from 'react-bootstrap'
function Select({
	text = 'name label',
	name = 'name select',
	handleOnChange = null,
	value,
	textPadrao = 'text padrao',
	options,
	disabled = true,
	placeholder = 'placeholder',
}) {
	return (
		<>
			<Form.Label style={{ marginTop: '0.5em' }}>{text}</Form.Label>
			<Form.Select
				style={{ textAlign: 'center' }}
				name={name}
				onChange={handleOnChange}
				disabled={disabled}
				value={value}
				placeholder={placeholder}
			>
				<option value=''>{textPadrao}</option>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</Form.Select>
		</>
	)
}

export default Select
