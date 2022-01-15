import { BsPlayBtnFill } from 'react-icons/bs'

function Button({ text = 'Name button' }) {
	return (
		<button>
			<BsPlayBtnFill>{text}</BsPlayBtnFill>
		</button>
	)
}

export default Button
