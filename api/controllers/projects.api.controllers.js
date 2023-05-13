import * as services from '../../services/projects.services.js';


function getProjects(req, res) {
    services.getProjects()
    .then(function(projects){
        res.status(200).json(projects);
    })
}

function createProject(req, res) {

    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }

    console.log(project);

    services.createProject(project)
        .then(function(project){
            res.status(201).json(project);
        })
}

export {
    getProjects,
    createProject
};