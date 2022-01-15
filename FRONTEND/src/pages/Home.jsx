import { Link } from 'react-router-dom'

import Container from '../components/layout/Container'
import Button from '../components/form/Button'

import styles from './Home.module.css'
function Home() {
	return (
		<Container>
			<div className={styles.container_home}>
				<h2>Bem vindo!</h2>
				<p>
					Faça login para Acessar o sistema de <span>Apontamento de Horas</span>
				</p>
				<Link to='/login'>
					<div>
						<Button>Login</Button>
					</div>
				</Link>
				<p>
					Não tem registro?{' '}
					<span>Peça ao seu supervisor acesso ao sistema!</span>
				</p>
			</div>
		</Container>
	)
}

export default Home
