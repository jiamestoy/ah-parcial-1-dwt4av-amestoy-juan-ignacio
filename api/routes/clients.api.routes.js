import express from 'express';
import * as controller from '../controllers/clients.api.controllers.js';

const route = express.Router();

route.get('/clients', controller.getClients);
route.post('/clients', controller.createClient);

export default route;