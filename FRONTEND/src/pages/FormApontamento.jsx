import { useEffect, useState } from 'react'

import Input from '../components/form/Input'
import Select from '../components/form/Select'
import TextArea from '../components/form/TextArea'

import styles from './FormApontamento.module.css'
function FormApontamento() {
	const [date, setDate] = useState('')
	const [codigoMotivo, setCodigoMotivo] = useState('')
	const [descricaoMotivo, setDescricaoMotivo] = useState('')
	const [descricaoTarefa, setDescricaoTarefa] = useState('')
	const [di, setDi] = useState('')
	const [os, setOs] = useState('')
	const [postoTrabalho, setPostoTrabalho] = useState('')
	const [operacao, setOperacao] = useState('')
	const [expediente, setExpediente] = useState('')
	const [inicio, setInicio] = useState('')
	const [intervalo, setIntervalo] = useState('')
	const [termino, setTermino] = useState('')
	const [observacao, setObservacao] = useState('')

	const handleDate = (e) => {
		setDate(e.currentTarget.value)
	}

	const handleCodigoMotivo = (e) => {
		setCodigoMotivo(e.currentTarget.value)
	}

	const handleCodigoMotivoOptions = () => {} //todo

	const handleDescricaoMotivo = (e) => {
		setDescricaoMotivo(e.currentTarget.value)
	}

	const handleDescricaoMotivoOptions = () => {} //todo

	const handleDescricaoTarefa = (e) => {
		setDescricaoTarefa(e.currentTarget.value)
	}

	const handleDi = (e) => {
		setDi(e.currentTarget.value)
	}

	const handleDiOptions = () => {} //todo

	const handleOs = (e) => {
		setOs(e.currentTarget.value)
	}

	const handleOsOptions = () => {} //todo

	const handlePostoTrabalho = (e) => {
		setPostoTrabalho(e.currentTarget.value)
	}

	const handlePostoTrabalhoOptions = () => {} //todo

	const handleOperacao = (e) => {
		setOperacao(e.currentTarget.value)
	}

	const handleOperacaoOptions = () => {} //todo

	const handleExpediente = (e) => {
		setExpediente(e.currentTarget.value)
	}

	const handleExpedienteOptions = () => {} //todo

	const handleInicio = (e) => {
		setInicio(e.currentTarget.value)
	}

	const handleIntervalo = (e) => {
		setIntervalo(e.currentTarget.value)
	}

	const handleTermino = (e) => {
		setTermino(e.currentTarget.value)
	}

	const handleTextAreaOnchang = (e) => {
		setObservacao(e.currentTarget.value)
	}

	return (
		<form className={styles.formApontamento}>
			<div className={styles.formApontamento_container}>
				<div className={styles.formApontamento_container_line_one}>
					<Input
						type='date'
						text='Data:'
						name='data'
						placeholder='Data'
						value={date}
						handleOnChange={handleDate}
						readyOnly={false}
					/>
					<Select
						text='Código Motivo:'
						name='codigo_motivo'
						value={codigoMotivo}
						handleOnChange={handleCodigoMotivo}
						options={handleCodigoMotivoOptions}
					/>
					<Select
						text='Descrição Motivo:'
						name='descricao_motivo'
						value={descricaoMotivo}
						handleOnChange={handleDescricaoMotivo}
						options={handleDescricaoMotivoOptions}
					/>
					<Input
						type='text'
						text='Descrição da tarefa:'
						name='descricao_tarefa'
						placeholder='Descrição da tarefa'
						value={descricaoTarefa}
						handleOnChange={handleDescricaoTarefa}
						readyOnly={true}
					/>
				</div>
				<div className={styles.formApontamento_container_line_two}>
					<div>
						<Select
							text='DI:'
							name='di'
							value={di}
							handleOnChange={handleDi}
							options={handleDiOptions}
						/>
						<ul>
							<label>
								OP<li></li>
							</label>

							<label>
								Descrição<li></li>
							</label>

							<label>
								Numero<li></li>
							</label>

							<label>
								Nome Peça<li></li>
							</label>

							<label>
								Numero Peça<li></li>
							</label>

							<label>
								Cliente<li></li>
							</label>
						</ul>
					</div>
					<div>
						<Select
							text='OS:'
							name='os'
							value={os}
							handleOnChange={handleOs}
							options={handleOsOptions}
						/>
						<ul>
							<label>
								OP<li></li>
							</label>

							<label>
								Descrição<li></li>
							</label>

							<label>
								Numero<li></li>
							</label>

							<label>
								Nome Peça<li></li>
							</label>

							<label>
								Numero Peça<li></li>
							</label>

							<label>
								Cliente<li></li>
							</label>
						</ul>
					</div>
				</div>
				<div className={styles.formApontamento_container_line_two}>
					<Select
						text='Posto trabalho:'
						name='posto_trabalho'
						value={postoTrabalho}
						handleOnChange={handlePostoTrabalho}
						options={handlePostoTrabalhoOptions}
					/>
					<Select
						text='Operação:'
						name='operacao'
						value={operacao}
						handleOnChange={handleOperacao}
						options={handleOperacaoOptions}
					/>
					<Select
						text='Expediente:'
						name='expediente'
						value={expediente}
						handleOnChange={handleExpediente}
						options={handleExpedienteOptions}
					/>
					<Input
						type='text'
						text='Inicio:'
						name='inicio'
						placeholder='Hora inicio'
						value={inicio}
						handleOnChange={handleInicio}
						readyOnly={true}
					/>
					<Input
						type='text'
						text='Intervalo:'
						name='intervalo'
						placeholder='Hora intervalo'
						value={intervalo}
						handleOnChange={handleIntervalo}
						readyOnly={true}
					/>
					<Input
						type='text'
						text='Termino:'
						name='termino'
						placeholder='Hora termino'
						value={termino}
						handleOnChange={handleTermino}
						readyOnly={true}
					/>
					<div>
						<span>Total</span>
						<p>_______________</p>
					</div>
				</div>
				<TextArea
					text='Observação:'
					name='observacao'
					cols='30'
					rows='10'
					placeholde='Observação'
					onChange={handleTextAreaOnchang}>
					{observacao}
				</TextArea>
			</div>
		</form>
	)
}

export default FormApontamento
