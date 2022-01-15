import { useState } from 'react'

import Input from '../components/form/Input'
import Button from '../components/form/Button'

import styles from './FormLogin.module.css'
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
		<form onSubmit={submit} className={styles.formLogin_container}>
			<h2>Login</h2>
			<Input
				type='text'
				text='Usuário'
				name='user'
				placeholder='Nome do usuário'
				value={user}
				handleOnChange={handleUser}
			/>
			<Input
				type='text'
				text='Senha'
				name='password'
				placeholder='Nome do usuário'
				value={password}
				handleOnChange={handlePassword}
			/>
			<div className={styles.formLogin_container_btns}>
				<Button>Login</Button>
			</div>
		</form>
	)
}

export default FormLogin
