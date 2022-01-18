import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Badge } from 'react-bootstrap'

import Formulario from '../components/form/Formulario'
import Input from '../components/form/Input'
import Button from '../components/form/Button'

function FormLogin() {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	const handleUser = (e) => {
		setUser(e.currentTarget.value)
	}

	const handlePassword = (e) => {
		setPassword(e.currentTarget.value)
	}

	const submit = (e) => {
		e.preventDefault()
	}

	return (
		<div>
			<Formulario handleOnSubit={submit}>
				<h1>Login</h1>
				<Input
					type='text'
					text='User'
					placeholder='Nome do usuário'
					value={user}
					name='user'
					handleOnChange={handleUser}
				/>
				<Input
					type='password'
					text='Senha'
					placeholder='Digite sua senha'
					value={password}
					name='password'
					handleOnChange={handlePassword}
				/>
				<Link to='/apontamento'>
					<Button>Entrar</Button>
				</Link>
				<div style={{ marginTop: '2em' }}>
					<p>
						<Badge bg='secondary' style={{ padding: '1em' }}>
							Não tem acesso? fale com o seu supervisor
						</Badge>
					</p>
					<p>
						<Badge bg='secondary' style={{ padding: '1em' }}>
							Em caso de problemas ligue no ramal 5621
						</Badge>
					</p>
				</div>
			</Formulario>
		</div>
	)
}

export default FormLogin
