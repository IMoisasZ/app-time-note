import styles from './SelectPagination.module.css'
function SelectPagination({ handleOnChange }) {
	return (
		<div className={styles.container_select_pagination}>
			<select onChange={handleOnChange} defaultValue={10}>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={12}>12</option>
			</select>
		</div>
	)
}

export default SelectPagination
