import { Form } from 'react-bootstrap'

function Formulario({
	name = 'name form',
	handleOnSubit = null,
	children,
	display = 'flex',
	justifyContent = 'center',
	alignItens = 'center',
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
				display,
				justifyContent,
				alignItens,
				textAlign,
				width,
				margin,
				border,
				borderRadius,
				padding,
				backgroundColor,
				color: 'white',
				fontWeight: 'bold',
			}}>
			<Form.Group className='vw-100'>{children}</Form.Group>
		</Form>
	)
}

export default Formulario
