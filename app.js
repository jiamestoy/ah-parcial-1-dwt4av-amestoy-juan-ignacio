//import { createServer } from 'node:http';
import { createPage } from './pages/helper.js';
import express from 'express';

const app = express();

app.get('/', function(req, res) {
    res.write(createPage('Home'))
})

app.get('/mobile', function(req, res) {
    res.write(createPage('Mobile'))
})

app.get('/landing', function(req, res) {
    res.write(createPage('Landing Page'))
})

app.get('/webapp', function(req, res) {
    res.write(createPage('Web App'))
})

app.get('/ecommerce', function(req, res) {
    res.write(createPage('e-Commerce'))
})

app.get('/games', function(req, res) {
    res.write(createPage('Games'))
})

app.listen(2222);