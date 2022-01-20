import api from './api'

export async function create(http, body) {
	const create = await api.post(http, body)
	return create
}

export async function update(http, body) {
	return await api.put(http, body)
}

export async function ready(http) {
	const ready = await api.get(http)
	return ready.data
}

export async function remove(http, params) {
	return await api.delete(http, params)
}
