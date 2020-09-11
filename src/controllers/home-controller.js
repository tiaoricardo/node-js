'use strict';

const express = require('express');
const router = express.Router();

exports.get = (req, res, next) => {
	res.status(200).send({
		title: "Learning Node.js API",
		version: "0.0.1"
	});
}

exports.post = (req, res, next) => {
	res.status(201).send(req.body);
}

exports.put = (req, res, next) => {
	const id = req.params.id;
	res.status(200).send({
		id: id,
		item: req.body
	});
}

exports.delete = (req, res, next) => {	
	res.status(200).send(req.body);
}