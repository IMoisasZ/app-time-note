import { Button } from 'react-bootstrap'
function Btn({ children }) {
	return (
		<Button variant='primary' size='lg' style={{ marginTop: '2em' }}>
			{children}
		</Button>
	)
}

export default Btn
