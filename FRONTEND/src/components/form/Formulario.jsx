import { Form } from 'react-bootstrap'

function Formulario({
	name = 'name form',
	handleOnSubit = null,
	children,
	display = 'flex',
	justifyContent = 'center',
	textAlign = 'center',
	width = '80%',
	margin = '0 auto',
	border = '1px solid black',
	borderRadius = '1em',
	padding = '5.5em 2em',
	backgroundColor = '#566D7E',
}) {
	return (
		<Form
			name={name}
			onSubmit={handleOnSubit}
			style={{
				justifyContent,
				textAlign,
				width,
				margin,
				border,
				borderRadius,
				padding,
				backgroundColor,
				color: 'white',
				fontWeight: 'bold',
				display,
			}}
		>
			<Form.Group className='vw-100'>{children}</Form.Group>
		</Form>
	)
}

export default Formulario
