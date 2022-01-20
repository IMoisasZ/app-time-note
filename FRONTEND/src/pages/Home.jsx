import { Link } from 'react-router-dom'

import Container from '../components/layout/Container'
import Button from '../components/form/Button'

function Home() {
	return (
		<Container maxWidth='100%'>
			<div>
				<h1
					style={{ color: 'blue', fontWeight: 'bolder', marginBottom: '3em' }}
				>
					Bem vindo!
				</h1>
				<p>
					Faça login para Acessar o sistema de{' '}
					<span
						style={{
							backgroundColor: '#ccc',
							fontWeight: 'bold',
							fontSize: '1.5em',
						}}
					>
						Apontamento de Horas
					</span>
				</p>
				<Link to='/login'>
					<div>
						<Button>Login</Button>
					</div>
				</Link>
				<p style={{ marginTop: '2em' }}>
					Não tem registro?{' '}
					<span
						style={{
							backgroundColor: '#ccc',
							fontWeight: 'bold',
							fontSize: '1.5em',
						}}
					>
						Peça ao seu supervisor acesso ao sistema!
					</span>
				</p>
			</div>
		</Container>
	)
}

export default Home
