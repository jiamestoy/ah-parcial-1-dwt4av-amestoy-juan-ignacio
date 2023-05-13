import express from 'express';
import * as controller from '../controllers/projects.controllers.js';

const route = express.Router();

route.get('/', controller.getHome);
route.get('/mobile', controller.getMobileProjects);
route.get('/landing', controller.getLandingProjects);
route.get('/webapp', controller.getWebappProjects);
route.get('/ecommerce', controller.getEcommerceProjects);
route.get('/games', controller.getGamesProjects);

export default route;