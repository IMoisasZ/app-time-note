import { Button } from 'react-bootstrap'
function Btn({
	children = 'name button',
	handleOnClick = null,
	variant = 'primary',
}) {
	return (
		<Button
			variant={variant}
			size='lg'
			style={{ marginTop: '0.5em' }}
			onClick={handleOnClick}>
			{children}
		</Button>
	)
}

export default Btn
