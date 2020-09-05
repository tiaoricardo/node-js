'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const root = router.get('/', (req, res, next) => {
	res.status(200).send({
		title: "Learning Node.js API",
		version: "0.0.1"
	});
});

const create = router.post('/', (req, res, next) => {
	res.status(201).send(req.body);
});

const update = router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	res.status(200).send({
		id: id,
		item: req.body
	});
});

const destroy = router.delete('/', (req, res, next) => {	
	res.status(200).send(req.body);
});

app.use('/', root);
app.use('/', create);
app.use('/', update);
app.use('/', destroy);

module.exports = app;
