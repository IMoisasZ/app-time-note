import api from './api'

async function create(http, body) {
	const create = await api.post(http, body)
	return create
}

async function update(http, body) {
	return await api.put(http, body)
}

export async function ready(http) {
	const ready = await api.get(http)
	return ready.data
}

async function remove(http, params) {
	return await api.delete(http, params)
}
