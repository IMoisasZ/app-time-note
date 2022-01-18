import { useState, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import Formulario from '../components/form/Formulario'
import Input from '../components/form/Input'
import Select from '../components/form/Select'

import { ready } from '../api/apiHttp'

function FormApontamento() {
	const [date, setDate] = useState('')
	const [codeReasonId, setCodeReasonId] = useState('')
	const [descriptionReasonId, setDescriptionReasonId] = useState('')

	const [codeReasonOptions, setCodeReasonOptions] = useState([])
	const [descriptionReasonOptions, setDescriptionReasonOptions] = useState([])

	// code_reason
	useEffect(() => {
		const allCodigoMotivo = async () => {
			const options = await ready('codeReason')
			const newOptions = []
			options.map(({ code_reason_id, code_reason, description_reason }) => {
				newOptions.push({
					id: code_reason_id,
					name: `${code_reason} - ${description_reason}`,
				})
			})

			setCodeReasonOptions(newOptions)
		}
		allCodigoMotivo()
	}, [])

	// description_reason
	useEffect(() => {
		const allDescriptonReason = async () => {
			const options = await ready('descriptionReason')
			console.log(options)
			const newOptions = []
			options.map(
				({
					description_reason_id,
					code_reason_id,
					description_reason,
					codeReason,
				}) => {
					if (code_reason_id === parseInt(codeReasonId)) {
						newOptions.push({
							id: description_reason_id,
							id_code_reason: code_reason_id,
							name: `${codeReason.code_reason} - ${description_reason}`,
						})
					}
				},
			)

			setDescriptionReasonOptions(newOptions)
		}
		allDescriptonReason()
	}, [codeReasonId])

	const handleDate = (e) => {
		setDate(e.currentTarget.value)
	}

	const handleCodeReasonId = (e) => {
		setCodeReasonId(e.currentTarget.value)
	}

	const handleDescriptionReasonId = (e) => {
		setDescriptionReasonId(e.currentTarget.value)
	}

	const submit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Formulario
				name='name form'
				handleOnSubit={submit}
				display='flex'
				justifyContent='center'
				alignItens='center'
				textAlign='center'
				width='99%'
				margin='0 auto'
				border='1px solid black'
				borderRadius='1em'
				padding='1em'
				backgroundColor='#566D7E'>
				<Row className='vw-100'>
					<Col xs={2}>
						<Input
							text='Data'
							type='date'
							value={date}
							handleOnChange={handleDate}
						/>
					</Col>
					<Col md={3}>
						<Select
							text='Códgio motivo'
							name='codeReason'
							value={codeReasonId}
							handleOnChange={handleCodeReasonId}
							textPadrao='Selecione um item'
							options={codeReasonOptions}
							readOnly={true}
						/>
					</Col>
					<Col xxl={7}>
						<Select
							text='Descrição motivo'
							name='descriptionReason'
							value={descriptionReasonId}
							handleOnChange={handleDescriptionReasonId}
							textPadrao='Selecione um item'
							options={descriptionReasonOptions}
							readOnly={true}
						/>
					</Col>
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
