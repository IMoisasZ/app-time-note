import { Button } from 'react-bootstrap'
function Btn({ children = 'name button', handleOnClick = null }) {
	return (
		<Button
			variant='primary'
			size='lg'
			style={{ marginTop: '2em' }}
			onClick={handleOnClick}
		>
			{children}
		</Button>
	)
}

export default Btn
