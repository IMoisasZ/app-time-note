import { useState, useEffect } from 'react'

import Container from '../../components/layout/Container'
import Input from '../../components/form/Input'

import api from '../../api/api'

function Consulta() {
	const [monthValue, setMonthValue] = useState('')
	const [dayOfMonthFirstTable, SetDayOfMonthFirstTable] = useState([])
	const [dayOfMonthSecondTable, SetDayOfMonthSecondTable] = useState([])
	const [dataNote, setDataNote] = useState([])
	const retUltimoDia = function (year, month) {
		var ultimoDia = new Date(year, month, 0).getDate()
		return ultimoDia
	}

	useEffect(() => {
		const result = retUltimoDia(
			monthValue.split('-')[0],
			monthValue.split('-')[1]
		)
		let diasMes = []
		for (let i = 1; i <= result; i++) {
			diasMes.push(i)
		}
		SetDayOfMonthFirstTable(diasMes)

		const data = async () => {
			const allDataNote = await api.get('projectNote')
			console.log(allDataNote)
		}
		data()
	}, [monthValue])

	return (
		<Container>
			<h1>Consulta</h1>
			<Input
				type='month'
				handleOnChange={(e) => setMonthValue(e.currentTarget.value)}
				value={monthValue}
			/>
			<table>
				<thead>
					{dayOfMonthFirstTable.map((day) => {
						return (
							day <= 16 && (
								<th key={day}>
									<tr>{day}</tr>
								</th>
							)
						)
					})}
				</thead>
				<tbody>
					<th>
						<td></td>
					</th>
				</tbody>
			</table>
		</Container>
	)
}

export default Consulta
