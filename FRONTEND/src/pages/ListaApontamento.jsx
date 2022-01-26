import { useState, useEffect } from 'react'
import { Table, Pagination } from 'react-bootstrap'
import { GrTrash, GrEdit, GrCopy } from 'react-icons/gr'

import { ready } from '../api/apiHttp'

function ListaApontamento() {
	const [listaDados, setListaDados] = useState([])
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [numberPages, setNumberPages] = useState([])
	const [limit, setLimit] = useState(1)

	useEffect(() => {
		const allNotes = async () => {
			const notes = await ready(`projectNote?page=${page}&limit=${limit}`)
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
				note.total = total
				return newNotes.push(note)
			})
			setListaDados(newNotes)
			setTotalPages(Math.ceil(notes.length / limit))
		}
		const handleNumberPages = () => {
			let numbers = []
			for (let i = 1; i <= totalPages; i++) {
				numbers.push([i])
			}
			setNumberPages(numbers)
		}
		handleNumberPages()
		allNotes()
	}, [limit, totalPages, page])

	console.log(page)
	const handlePreviusPage = () => {
		parseInt(page) > 1 && setPage(parseInt(page) - 1)
	}

	const handleNextPage = () => {
		parseInt(page) === parseInt(totalPages)
			? setPage(parseInt(totalPages))
			: setPage(parseInt(page) + 1)
	}
	console.log(page)

	return (
		<>
			<h2>Lista Apontamentos</h2>
			<Table
				striped
				bordered
				hover
				variant='dark'
				style={{ minHeight: '38em' }}
			>
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
					{listaDados.map((note) => (
						<tr key={note.note_id}>
							<td>{note.note_id}</td>
							<td>{note.date}</td>
							<td>{note.codeReason.code_reason}</td>
							<td>{note.description_reason.description_reason}</td>
							<td>{note.di === null ? '' : note.di.di}</td>
							<td>{note.os}</td>
							<td>{note.di === null ? '' : note.di.clients.name}</td>
							<td>{note.operation === null ? '' : note.operation.operation}</td>
							<td>{note.expedient.expedient}</td>
							<td>{note.start}</td>
							<td>{note.pause}</td>
							<td>{note.finish}</td>
							<td>{note.total}</td>
							<td>
								<button>
									<GrCopy />
								</button>
							</td>
							<td>
								<button>
									<GrEdit />
								</button>
							</td>
							<td>
								<button>
									<GrTrash />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Pagination>
					<Pagination.First page={1} />
					<Pagination.Prev onClick={() => handlePreviusPage()} />
					{numberPages.map((pg) => {
						return (
							<Pagination.Item onClick={() => setPage(pg)} key={pg}>
								{pg}
							</Pagination.Item>
						)
					})}
					<Pagination.Next onClick={() => handleNextPage()} />
					<Pagination.Last page={totalPages} />
				</Pagination>
			</div>
		</>
	)
}
export default ListaApontamento
