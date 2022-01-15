import { Link } from 'react-router-dom'

import Container from '../Container'
import Button from '../form/Button'

import styles from './Home.module.css'

function Home({ funcionario = 'Name employee' }) {
	return (
		<Container>
			<div className={styles.container_home}>
				<div className={styles.container_information}>
					<h3>Apontamento de Horas</h3>
					<p>{funcionario}</p>
				</div>
				<div className={styles.container_btns}>
					<Link to='/apontamento'>
						<Button></Button>
						<span>Apontamento de Horas</span>
					</Link>
				</div>
			</div>
		</Container>
	)
}

export default Home
