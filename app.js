import { createServer } from 'node:http';
import { createPage } from './pages/helpers.js';

const server = createServer(function(req, res){

    if (req.url === '/') {
        res.write(createPage('Home'))
    } else if (req.url === '/mobile') {
        res.write(createPage('Mobile'))
    } else if (req.url === '/landing') {
        res.write(createPage('Landing Page'))
    } else if (req.url === '/webapp') {
        res.write(createPage('Web App'))
    } else if (req.url === '/ecommerce') {
        res.write(createPage('e-Commerce'))
    } else if (req.url === '/games') {
        res.write(createPage('Games'))
    } else {
        res.write(createPage('Página Inexistente'))
    }

    res.end();
})

server.listen(2222);