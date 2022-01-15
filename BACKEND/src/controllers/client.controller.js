import ClientService from '../services/client.service.js'

async function createClient(req, res, next){
    try {
        const client = req.body
        res.send(await ClientService.createClient(client))
    } catch (error) {
        next(error)
    }
}

async function updateClient(req, res, next){
    try {
        const client = req.body
        res.send(await ClientService.updateClient(client))
    } catch (error) {
        next(error)
    }
}

async function getClients(req, res, next) {
    try {
        res.send(await ClientService.getClients())
    } catch (error) {
        next(error)
    }
}

async function getClient(req, res, next) {
    try {
        res.send(await ClientService.getClient(req.params.client_id))
    } catch (error) {
        next(error)
    }
}

export default {
    createClient,
    updateClient,
    getClients,
    getClient
}