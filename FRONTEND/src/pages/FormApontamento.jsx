import { useState, useEffect } from 'react'

import { Row } from 'react-bootstrap'
import Formulario from '../components/form/Formulario'
import Input from '../components/form/Input'
import Select from '../components/form/Select'

import { ready } from '../api/apiHttp'

function FormApontamento() {
	const [date, setDate] = useState('')
	const [codigoMotivo, setCodigoMotivo] = useState('')
	const [options, setOptions] = useState([])

	useEffect(() => {
		const allCodigoMotivo = async () => {
			const options = await ready('codeReason')
			setOptions(options)
		}
		allCodigoMotivo()
	}, [])
	const handleDate = (e) => {
		setDate(e.currentTarget.value)
	}

	const handleCodigoMotivo = (e) => {
		setCodigoMotivo(e.currentTarget.value)
	}

	return (
		<>
			<Formulario>
				<Row className='mb-3'>
					<Input
						text='Data'
						type='date'
						value={date}
						handleOnChange={handleDate}
					/>

					<Select
						text='Códgio motivo'
						name='codigoMotivo'
						value={codigoMotivo}
						handleOnChange={handleCodigoMotivo}
						textPadrao='Selecione um item'
						options={options}
						readOnly={true}
					/>
				</Row>
			</Formulario>
		</>
	)
}
export default FormApontamento

/* <Input as={Col} controlId='formGridPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Input> */

/* <Input className='mb-3' controlId='formGridAddress1'>
				<Form.Label>Address</Form.Label>
				<Form.Control placeholder='1234 Main St' />
			</Input>

			<Input className='mb-3' controlId='formGridAddress2'>
				<Form.Label>Address 2</Form.Label>
				<Form.Control placeholder='Apartment, studio, or floor' />
			</Input>

			<Row className='mb-3'>
				<Input as={Col} controlId='formGridCity'>
					<Form.Label>City</Form.Label>
					<Form.Control />
				</Input>

				<Input as={Col} controlId='formGridState'>
					<Form.Label>State</Form.Label>
					<Form.Select defaultValue='Choose...'>
						<option>Choose...</option>
						<option>...</option>
					</Form.Select>
				</Input>

				<Input as={Col} controlId='formGridZip'>
					<Form.Label>Zip</Form.Label>
					<Form.Control />
				</Input>
			</Row>

			<Input className='mb-3' id='formGridCheckbox'>
				<Form.Check type='checkbox' label='Check me out' />
			</Input>

			<Button variant='primary' type='submit'>
				Submit
			</Button> */

// 	<Select
// 		text='Código Motivo:'
// 		name='codigo_motivo'
// 		value={codigoMotivo}
// 		handleOnChange={handleCodigoMotivo}
// 		options={handleCodigoMotivoOptions}
// 	/>

// 	<Select
// 		text='Descrição Motivo:'
// 		name='descricao_motivo'
// 		value={descricaoMotivo}
// 		handleOnChange={handleDescricaoMotivo}
// 		options={handleDescricaoMotivoOptions}
// 	/>

// 	<Input
// 		type='text'
// 		text='Descrição da tarefa:'
// 		name='descricao_tarefa'
// 		placeholder='Descrição da tarefa'
// 		value={descricaoTarefa}
// 		handleOnChange={handleDescricaoTarefa}
// 		readyOnly={true}
// 	/>

// 	<Select
// 		text='DI:'
// 		name='di'
// 		value={di}
// 		handleOnChange={handleDi}
// 		options={handleDiOptions}
// 	/>
// 	<Select
// 		text='OS:'
// 		name='os'
// 		value={os}
// 		handleOnChange={handleOs}
// 		options={handleOsOptions}
// 	/>
// 	<ul>
// 		<li>OP:</li>
// 		<li>Descrição:</li>
// 		<li>Numero:</li>
// 		<li>Nome Peça:</li>
// 		<li>Numero Peça:</li>
// 		<li>Cliente:</li>
// 	</ul>

// 	<Select
// 		text='Posto trabalho:'
// 		name='posto_trabalho'
// 		value={postoTrabalho}
// 		handleOnChange={handlePostoTrabalho}
// 		options={handlePostoTrabalhoOptions}
// 	/>
// 	<Select
// 		text='Operação:'
// 		name='operacao'
// 		value={operacao}
// 		handleOnChange={handleOperacao}
// 		options={handleOperacaoOptions}
// 	/>
// 	<Select
// 		text='Expediente:'
// 		name='expediente'
// 		value={expediente}
// 		handleOnChange={handleExpediente}
// 		options={handleExpedienteOptions}
// 	/>
// 	<Input
// 		type='time'
// 		text='Inicio:'
// 		name='inicio'
// 		placeholder='Hora inicio'
// 		value={inicio}
// 		handleOnChange={handleInicio}
// 		readyOnly={true}
// 	/>
// 	<Input
// 		type='time'
// 		text='Intervalo:'
// 		name='intervalo'
// 		placeholder='Hora intervalo'
// 		value={intervalo}
// 		handleOnChange={handleIntervalo}
// 		readyOnly={true}
// 	/>
// 	<Input
// 		type='time'
// 		text='Termino:'
// 		name='termino'
// 		placeholder='Hora termino'
// 		value={termino}
// 		handleOnChange={handleTermino}
// 		readyOnly={true}
// 	/>
// 	<span>Total</span>
// 	<p>_______________</p>
// 	<TextArea
// 		text='Observação:'
// 		name='observacao'
// 		cols='30'
// 		rows='14'
// 		placeholde='Observação'
// 		onChange={handleTextAreaOnchang}
// 	></TextArea>
// 	<Button>Incluir</Button>
// </form>
