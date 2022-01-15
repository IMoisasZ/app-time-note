import ClientRepository from "../repositories/client.repository.js";

async function createClient(client){
    return await ClientRepository.createClient(client)
}

async function updateClient(client){
    return await ClientRepository.updateClient(client)
}

async function getClients(){
    return await ClientRepository.getClients()
}

async function getClient(cliente_id){
    return await ClientRepository.getClient(cliente_id)
}

export default {
    createClient,
    updateClient,
    getClients,
    getClient
}