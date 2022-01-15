import styles from './Input.module.css'
function Input({
	text = 'name label',
	name = 'name input',
	type = 'type input',
	value = 'value input',
	placeholder = 'description input',
	handleOnChange = null,
}) {
	return (
		<div className={styles.input}>
			<label htmlFor={name}>{text}</label>
			<input
				type={type}
				name={name}
				id={name}
				value={value}
				placeholder={placeholder}
				onChange={handleOnChange}
			/>
		</div>
	)
}

export default Input
