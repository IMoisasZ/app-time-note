import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { BsTrash, BsPencilSquare, BsFiles } from 'react-icons/bs'

import { ready } from '../../api/apiHttp'
import ButtonPagination from '../../components/pagination/ButtonPagination'
import SelectPagination from '../../components/pagination/SelectPagination'

import styles from './ListaApontamento.module.css'

function ListaApontamento() {
	const [listaDados, setListaDados] = useState([])
	const [itensPorPagina, setItensPorPagina] = useState(10)
	const [currentPage, setCurrentPage] = useState(0)

	const pages = Math.ceil(listaDados.length / itensPorPagina)
	const startIndex = currentPage * itensPorPagina
	const endIndex = startIndex + itensPorPagina
	const currentItens = listaDados.slice(startIndex, endIndex)
	const numeroRegistros = listaDados.length

	useEffect(() => {
		const allNotes = async () => {
			const notes = await ready(`projectNote`)
			let newNotes = []
			notes.map((note) => {
				const newStart = note.start.split(':')
				const newPause = note.pause.split(':')
				const newFinish = note.finish.split(':')
				const int =
					parseFloat(newFinish[0]) -
					parseFloat(newStart[0]) -
					parseFloat(newPause[0])
				const rest =
					(parseFloat(newFinish[1]) -
						parseFloat(newStart[1]) -
						parseFloat(newPause[1])) /
					60
				const total = int + rest
				note.total = total.toFixed(2)
				return newNotes.push(note)
			})
			setListaDados(newNotes)
		}
		allNotes()
	}, [])

	useEffect(() => {
		setCurrentPage(0)
	}, [itensPorPagina])

	console.log(typeof currentPage)
	return (
		<>
			<div>
				<h2>Lista Apontamentos</h2>
				<Link to='/apontamento'>
					<button>Apontamento</button>
				</Link>
				<Link to='/consulta'>
					<button>Consulta</button>
				</Link>
			</div>
			<div style={{ minHeight: '36em', backgroundColor: 'white' }}>
				<Table striped bordered hover variant='primary'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Data</th>
							<th>Código Motivo</th>
							<th>Descrição Motivo</th>
							<th>DI</th>
							<th>OS</th>
							<th>Cliente</th>
							<th>Operação</th>
							<th>Expediente</th>
							<th>Inicio</th>
							<th>Intervalo</th>
							<th>Termino</th>
							<th>Total</th>
							<th colSpan={3}>Outros</th>
						</tr>
					</thead>
					<tbody>
						{currentItens.map((note) => (
							<tr key={note.note_id}>
								<td>{note.note_id}</td>
								<td>{note.date}</td>
								<td>{note.codeReason.code_reason}</td>
								<td>{note.description_reason.description_reason}</td>
								<td>{note.di === null ? '' : note.di.di}</td>
								<td>{note.os}</td>
								<td>{note.di === null ? '' : note.di.clients.name}</td>
								<td>
									{note.operation === null ? '' : note.operation.operation}
								</td>
								<td>{note.expedient.expedient}</td>
								<td>{note.start}</td>
								<td>{note.pause}</td>
								<td>{note.finish}</td>
								<td>{note.total}</td>
								<td>
									<button
										className={styles.button}
										title={`Copia do registro ${note.note_id}`}
									>
										<BsFiles className={styles.button_img} />
									</button>
								</td>
								<td>
									<Link to={`/apontamento?id=${note.note_id}`}>
										<button
											className={styles.button}
											title={`Editar o registro ${note.note_id}`}
										>
											<BsPencilSquare className={styles.button_img} />
										</button>
									</Link>
								</td>
								<td>
									<button
										className={styles.button}
										title={`Excluir o registro ${note.note_id}`}
									>
										<BsTrash className={styles.button_img} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<ButtonPagination
					pages={pages}
					currentPage={currentPage}
					handleCurrentPage={(e) =>
						setCurrentPage(Number(e.currentTarget.value))
					}
					handleOnFirstPage={() => setCurrentPage(0)}
					handleOnPrevPage={() => {
						return currentPage > 0 && setCurrentPage(currentPage - 1)
					}}
					handleOnNextPage={() => {
						return currentPage + 1 < pages && setCurrentPage(currentPage + 1)
					}}
					handleOnLastPage={() => {
						return setCurrentPage(pages - 1)
					}}
				/>
				<SelectPagination
					handleOnChange={(e) =>
						setItensPorPagina(Number(e.currentTarget.value))
					}
				/>
			</div>
			<div style={{ marginTop: '1em' }}>
				<p style={{ fontWeight: 'bold' }}>
					Qtde de registros:{' '}
					<span
						style={{
							backgroundColor: 'gray',
							color: 'blue',
							padding: '0.5em',
							borderRadius: '0.5em',
							minWidth: '3em',
						}}
					>
						{numeroRegistros}
					</span>
				</p>
			</div>
		</>
	)
}
export default ListaApontamento
