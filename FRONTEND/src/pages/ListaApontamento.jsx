import { useState, useEffect } from 'react'
import { Table, Pagination } from 'react-bootstrap'
import { GrTrash, GrEdit, GrCopy } from 'react-icons/gr'

import { ready } from '../api/apiHttp'

function ListaApontamento() {
	const [listaDados, setListaDados] = useState([])
	useEffect(() => {
		const allNotes = async () => {
			const notes = await ready('projectNote')
			setListaDados(notes)
		}
		allNotes()
	}, [])

	useEffect(() => {
		let total = 0
		listaDados.map(({ start, pause, finish }) => {
			let int =
				parseInt(finish.split(':')[0]) -
				parseInt(start.split(':')[0]) -
				parseInt(pause.split(':')[0])
			let rest =
				(parseInt(finish.split(':')[1]) -
					parseInt(start.split(':')[1]) -
					parseInt(pause.split(':')[1])) /
				60

			total = int + rest
			setListaDados({ ...listaDados, total: total })
			return true
		})
	}, [])

	console.log(listaDados)
	return (
		<>
			<h2>Lista Apontamentos</h2>
			<Table striped bordered hover variant='dark'>
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
						<tr>
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
			<div>
				<Pagination>
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item>{1}</Pagination.Item>
					<Pagination.Ellipsis />

					<Pagination.Item>{10}</Pagination.Item>
					<Pagination.Item>{11}</Pagination.Item>
					<Pagination.Item active>{12}</Pagination.Item>
					<Pagination.Item>{13}</Pagination.Item>
					<Pagination.Item disabled>{14}</Pagination.Item>

					<Pagination.Ellipsis />
					<Pagination.Item>{20}</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>
			</div>
		</>
	)
}
export default ListaApontamento
