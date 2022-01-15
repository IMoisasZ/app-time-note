import ClientModel from '../models/client.model.js'

async function createClient(client){
    try {
        const newClient = await ClientModel.create(client)
        return await getClient(newClient.client_id)
    } catch (error) {
        throw error
    }
}

async function updateClient(client){
    try {
        await ClientModel.update(client, {
            where: {
                client_id: client.client_id
            }
        })
        return await getClient(client.client_id)
    } catch (error) {
        throw error
    }
}

async function getClients(){
    try {
        return await ClientModel.findAll()
    } catch (error) {
        throw error
    }
}

async function getClient(client_id){
    try {
        return await ClientModel.findByPk(client_id)
    } catch (error) {
        throw error
    }
}

export default {
    createClient,
    updateClient,
    getClients,
    getClient
}