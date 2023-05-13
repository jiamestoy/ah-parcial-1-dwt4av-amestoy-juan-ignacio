import * as services from '../services/projects.services.js';
import * as views from '../views/projects.views.js'

function getHome(req, res) {
    res.send(views.createPage('Home'))
}

function getMobileProjects(req, res) {
    services.getProjects()
        .then(function(projects){
        
            res.send(views.createPage('Mobile', projects))
        })
}

function getLandingProjects(req, res) {
    services.getProjects()
        .then(function(projects){
        
            res.send(views.createPage('Landing Page', projects))
        })
}

function getWebappProjects(req, res) {
    services.getProjects()
        .then(function(projects){
        
            res.send(views.createPage('Web App', projects))
        })
}

function getEcommerceProjects(req, res) {
    services.getProjects()
    .then(function(projects){
    
        res.send(views.createPage('e-Commerce', projects))
    })
}

function getGamesProjects(req, res) {
    services.getProjects()
    .then(function(projects){
    
        res.send(views.createPage('Games', projects))
    })
}

export {
    getHome,
    getMobileProjects,
    getLandingProjects,
    getWebappProjects,
    getEcommerceProjects,
    getGamesProjects,
}