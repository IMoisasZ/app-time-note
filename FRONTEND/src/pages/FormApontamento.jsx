import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'react-bootstrap'
import Formulario from '../components/form/Formulario'
import Input from '../components/form/Input'
import Select from '../components/form/Select'
import TextArea from '../components/form/TextArea'
import Button from '../components/form/Button'

import { ready } from '../api/apiHttp'

function FormApontamento() {
	const today = new Date()
	const day = today.getDate().toString().padStart(2, '0')
	const month = (today.getMonth() + 1).toString().padStart(2, '0')
	const year = today.getFullYear()
	const newToday = `${year}-${month}-${day}`
	const [date, setDate] = useState(newToday)
	const [codeReasonId, setCodeReasonId] = useState('')
	const [disableCodeReasonId, setDisableCodeReasonId] = useState(false)
	const [descriptionReasonId, setDescriptionReasonId] = useState('')
	const [descriptionTask, setDescriptionTask] = useState('')
	const [diId, setDiId] = useState('')
	const [osId, setOsId] = useState('')
	const [osDi, setOsDi] = useState({})
	const [placeWorkId, setPlaceWorkId] = useState('')
	const [operationId, setOperationId] = useState('')
	const [expedientId, setExpedientId] = useState('')
	const [notice, setNotice] = useState('')
	const [start, setStart] = useState('')
	const [pause, setPause] = useState('')
	const [finish, setFinish] = useState('')
	const [totalPrior, setTotalPrior] = useState(0)
	const [total, setTotal] = useState(0)

	const [codeReasonOptions, setCodeReasonOptions] = useState([])
	const [descriptionReasonOptions, setDescriptionReasonOptions] = useState([])
	const [diOptions, setDiOptions] = useState([])
	const [osOptions, setOsOptions] = useState([])
	const [placeWorkOptions, setPlaceWorkOptions] = useState([])
	const [operationOptions, setOperationOptions] = useState([])
	const [expedientOptions, setExpedientOptions] = useState([])

	const [disableDescriptionReasonId, setDisableDescriptionReasonId] = useState()
	const [disableDi, setDisableDi] = useState(true)
	const [disableOs, setDisableOs] = useState(true)
	const [disablePlaceWork, setDisablePlaceWork] = useState(true)
	const [disableOperation, setDisabledOperation] = useState(true)
	const [disableExpedient, setDisableExpedient] = useState(true)

	// code_reason
	useEffect(() => {
		const allCodigoMotivo = async () => {
			const options = await ready('codeReason')
			const newOptions = []
			options.map(({ code_reason_id, code_reason, description_reason }) => {
				return newOptions.push({
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
			// validation components
			validateComponents()

			const options = await ready('descriptionReason')
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
					return true
				},
			)

			setDescriptionReasonOptions(newOptions)
		}
		allDescriptonReason()
	}, [codeReasonId])

	// di
	useEffect(() => {
		const allDi = async () => {
			const options = await ready('di')
			const newOptions = []
			options.map(({ di_id, di }) => {
				return newOptions.push({
					id: di_id,
					name: di,
				})
			})
			setDiOptions(newOptions)
			setOsDi(options)
		}
		allDi()
	}, [])

	// place_work
	useEffect(() => {
		const allPlaceWork = async () => {
			const options = await ready('placeWork')
			const newOptions = []
			options.map(({ place_work_id, place_work }) => {
				return newOptions.push({
					id: place_work_id,
					name: place_work,
				})
			})
			setPlaceWorkOptions(newOptions)
		}
		allPlaceWork()
	}, [])

	// operation
	useEffect(() => {
		const allOperations = async () => {
			const options = await ready('operation')
			const newOptions = []
			options.map(({ operation_id, operation }) => {
				return newOptions.push({
					id: operation_id,
					name: operation,
				})
			})
			setOperationOptions(newOptions)
		}
		allOperations()
	}, [])

	// expedient
	useEffect(() => {
		const allExpedient = async () => {
			const options = await ready('expedient')
			const newOptions = []
			options.map(({ expedient_id, expedient }) => {
				return newOptions.push({
					id: expedient_id,
					name: expedient,
				})
			})
			setExpedientOptions(newOptions)
		}
		allExpedient()
	}, [])

	// total
	useEffect(() => {
		const handleTotal = () => {
			const newStart = start.split(':')
			const newPause = pause.split(':')
			const newFinish = finish.split(':')

			const int =
				parseFloat(newFinish[0]) -
				parseFloat(newStart[0]) -
				parseFloat(newPause[0])
			const rest =
				(parseFloat(newFinish[1]) -
					parseFloat(newStart[1]) -
					parseFloat(newPause[1])) /
				60
			const totalGeral = int + rest
			setTotal(totalGeral)
		}
		handleTotal()
	}, [totalPrior])

	const handleDate = (e) => {
		setDate(e.currentTarget.value)
	}

	const handleCodeReasonId = (e) => {
		setCodeReasonId(e.currentTarget.value)
	}

	const handleDescriptionReasonId = (e) => {
		setDescriptionReasonId(e.currentTarget.value)
	}

	const handleDescriptionTask = (e) => {
		setDescriptionTask(e.currentTarget.value)
	}

	const handleDiId = (e) => {
		setDiId(e.currentTarget.value)
	}

	const handleOsId = (e) => {
		setOsId(e.currentTarget.value)
	}

	const handlePlaceWorkId = (e) => {
		setPlaceWorkId(e.currentTarget.value)
	}

	const handleOperationId = (e) => {
		setOperationId(e.currentTarget.value)
	}

	const handleExpedientId = (e) => {
		setExpedientId(e.currentTarget.value)
	}

	const handleStart = (e) => {
		setStart(e.currentTarget.value)
		setTotalPrior(e.currentTarget.value)
	}

	const handlePause = (e) => {
		setPause(e.currentTarget.value)
		setTotalPrior(e.currentTarget.value)
	}

	const handleFinish = (e) => {
		setFinish(e.currentTarget.value)
		setTotalPrior(e.currentTarget.value)
	}

	const handleNotice = (e) => {
		setNotice(e.currentTarget.value)
	}

	const validateComponents = () => {
		if (codeReasonId === 'Selecione um item' || codeReasonId === '') {
			setDisableDescriptionReasonId(true)
			setDisableDi(true)
			setDisableOs(true)
			setDisablePlaceWork(true)
			setDisabledOperation(true)
			setDisableExpedient(true)
			clear()
		} else {
			switch (codeReasonId) {
				case '1':
				case '5':
				case '6':
				case '9':
					setDisableDescriptionReasonId(false)
					setDisableDi(false)
					setDisableOs(false)
					setDisablePlaceWork(false)
					setDisabledOperation(false)
					setDisableExpedient(false)
					break
				case '2':
				case '3':
				case '4':
				case '7':
				case '8':
					setDisableDescriptionReasonId(false)
					setDisableDi(true)
					setDisableOs(true)
					setDisablePlaceWork(false)
					setDisabledOperation(true)
					setDisableExpedient(false)
					break
				case '10':
					setDisableDescriptionReasonId(false)
					setDisableDi(true)
					setDisableOs(true)
					setDisablePlaceWork(true)
					setDisabledOperation(true)
					setDisableExpedient(false)
					expedientId(3)
					break
			}
		}
	}

	function clear() {
		setDate(newToday)
		setCodeReasonId('')
		setDescriptionReasonId('')
		setDiId('')
		setOsId('')
		setDescriptionTask('')
		setPlaceWorkId('')
		setOperationId('')
		setExpedientId('')
		setStart('')
		setPause('')
		setFinish('')
		setNotice('')
		setTotal('')
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
				<h1 style={{ marginBottom: 0 }}>Apontamento de Horas</h1>
				<Row>
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
							disabled={disableCodeReasonId}
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
							disabled={disableDescriptionReasonId}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={3}>
						<Row
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
							}}>
							<Col xs={6}>
								<Select
									text='DI'
									name='di'
									value={diId}
									handleOnChange={handleDiId}
									textPadrao='DI'
									options={diOptions}
									disabled={disableDi}
								/>
							</Col>
							<Col xs={6}>
								<Select
									text='OS'
									name='os'
									value={osId}
									handleOnChange={handleOsId}
									textPadrao='OS'
									options={osOptions}
									disabled={disableOs}
								/>
							</Col>
						</Row>
					</Col>

					<Col xs={9}>
						<Input
							text='Descrição tarefa'
							type='text'
							value={descriptionTask}
							placeholder='Descrição da tarefa'
							handleOnChange={handleDescriptionTask}
						/>
					</Col>
					{diId.length > 0 && (
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								fontSize: '1em',
								fontWeight: 'bold',
								fontFamily: 'sans-serif',
								color: 'blue',
								marginTop: '0.5em',
							}}>
							<p className='me-3'>OP: {osDi[0].op} | </p>
							<p className='me-3'>Decrição: {osDi[0].die_description} | </p>
							<p className='me-3'>Numero: {osDi[0].die_number} | </p>
							<p className='me-3'>Nome Peça: {osDi[0].name_piece} | </p>
							<p className='me-3'>Numero Peça: {osDi[0].number_piece} | </p>
							<p className='me-3'>Cliente: {osDi[0].client.name} </p>
						</div>
					)}
					{osId.length > 0 && (
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								fontSize: '1em',
								fontWeight: 'bold',
								fontFamily: 'sans-serif',
								color: 'blue',
								marginTop: '0.5em',
							}}>
							<p className='me-3'>Nome Ferramental: | </p>
							<p className='me-3'>Numero Ferramenta: | </p>
							<p className='me-3'>Nome Peça: | </p>
							<p className='me-3'>Numero Peça: | </p>
							<p className='me-3'>Cliente: | </p>
						</div>
					)}
				</Row>
				<Row>
					<Col xs={3}>
						<Select
							text='Posto Trabalho'
							name='placeWork'
							value={placeWorkId}
							handleOnChange={handlePlaceWorkId}
							textPadrao='Selecione o posto de trabalho'
							options={placeWorkOptions}
							disabled={disablePlaceWork}
						/>
					</Col>
					<Col xs={6}>
						<Select
							text='Operação'
							name='operation'
							value={operationId}
							handleOnChange={handleOperationId}
							textPadrao='Selecione a operação'
							options={operationOptions}
							disabled={disableOperation}
						/>
					</Col>
					<Col xs={2}>
						<Select
							text='Expediente'
							name='expedient'
							value={expedientId}
							handleOnChange={handleExpedientId}
							textPadrao='Selecione o expediente'
							options={expedientOptions}
							disabled={disableExpedient}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<TextArea
							text='Observação'
							name='notice'
							placeholder='Escreva a observação'
							handleOnchange={handleNotice}
							value={notice}
						/>
					</Col>
					<Col xs={2}>
						<Input
							style={{ fontSize: '0.5em' }}
							text='Inicio'
							type='time'
							value={start}
							handleOnChange={handleStart}
						/>
					</Col>
					<Col xs={2}>
						<Input
							text='Intervalo'
							type='time'
							value={pause}
							handleOnChange={handlePause}
						/>
					</Col>
					<Col xs={2}>
						<Input
							text='Termino'
							type='time'
							value={finish}
							handleOnChange={handleFinish}
						/>
					</Col>
					<Col xs={2}>
						<Input
							text='Total'
							type='text'
							value={total ? total : ''}
							placeholder='Total geral'
							disabled={true}
						/>
					</Col>
				</Row>
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<Button variant='warning' handleOnClick={clear}>
						Limpar campos
					</Button>
					<Button handleOnClick={submit}>Incluir</Button>
					<Link to='/lista_apontamentos'>
						<Button variant='secondary'>Lista apontamentos</Button>
					</Link>
				</div>
			</Formulario>
		</>
	)
}
export default FormApontamento
