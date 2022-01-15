import styles from './Input.module.css'
function Input({
	text = 'Name label',
	name = 'Name input',
	type = 'type input',
	placeholder = 'Description action input',
	readOnly = false,
	handleOnChange = null,
}) {
	return (
		<div className={styles.input}>
			<label htmlFor={name}>{text}</label>
			<input
				type={type}
				placeholder={placeholder}
				id={name}
				readOnly={readOnly}
				onChange={handleOnChange}
			/>
		</div>
	)
}

export default Input
