import styles from './TextArea.module.css'
function TextArea({
	name = 'name textarea',
	text = 'name label',
	handleOnchange = null,
	placeholder = 'action text area',
	props,
	cols = '30',
	rows = '10',
}) {
	return (
		<div className={styles.textArea}>
			<label htmlFor={name}>{text}</label>
			<textarea
				name=''
				id=''
				cols={cols}
				rows={rows}
				placeholder={placeholder}
				onChange={handleOnchange}>
				{props}
			</textarea>
		</div>
	)
}

export default TextArea
