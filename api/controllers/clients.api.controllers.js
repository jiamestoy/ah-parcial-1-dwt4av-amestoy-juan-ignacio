import * as services from '../../services/clients.services.js';


function getClients(req, res) {

    services.getClients()
    .then(function(clients){
        res.status(200).json(clients);
    })
}

function createClient(req, res) {

    const client = {
        name: req.body.name,
        photo: req.body.photo,
        description: req.body.description,
    }

    services.createClient(client)
        .then(function(client){
            res.status(201).json(client);
        })
}

export {
    getClients,
    createClient
};