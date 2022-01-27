import { Button } from 'react-bootstrap'
function Btn({
	children = 'name button',
	handleOnClick = null,
	variant = 'primary',
	type = 'submit',
}) {
	return (
		<Button
			variant={variant}
			size='lg'
			style={{ marginTop: '0.5em' }}
			onClick={handleOnClick}
			type={type}
		>
			{children}
		</Button>
	)
}

export default Btn
