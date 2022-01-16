import styles from './Select.module.css'
function Select({
	text = 'name label',
	name = 'name select',
	handleOnChange = null,
	options = null,
	readOnly = false,
}) {
	return (
		<div className={styles.select}>
			<label htmlFor={name}>{text}</label>
			<select
				name={name}
				id={name}
				onChange={handleOnChange}
				readOnly={readOnly}>
				<option value=''>Selecione um item</option>
				<option value=''>{options}</option>
			</select>
		</div>
	)
}

export default Select
