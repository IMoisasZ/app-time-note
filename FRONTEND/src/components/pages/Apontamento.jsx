import { Link } from 'react-router-dom'

import FormApontamento from '../pages/FormApontamento'

import styles from './Apontamento.module.css'
function Apontamento() {
	return (
		<div className={styles.apontamento}>
			<h1>Apontamento</h1>
			<FormApontamento />
		</div>
	)
}

export default Apontamento
