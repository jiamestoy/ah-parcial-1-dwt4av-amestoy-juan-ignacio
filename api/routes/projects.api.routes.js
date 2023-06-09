import express from 'express';
import * as controller from '../controllers/projects.api.controllers.js';

const route = express.Router();

route.get('/projects', controller.getProjects);
route.post('/projects', controller.createProject);
route.patch('/projects/:idProject', controller.editProject);
route.delete('/projects/:idProject', controller.deleteProject);

export default route;