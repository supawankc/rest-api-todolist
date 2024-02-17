const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todolist = require('../models/Todolist.js');

router.get('/', (req, res, next) => {
    Todolist.find((err, data) => {
        if (err) return next(err);
        res.json(data);
    })
})

router.get('/:id', (req, res, next) => {
    Todolist.findById(req.params.id, (err, data) => {
        if (err) return next(err);
        res.json(data);
    })
})

router.post('/', (req, res, next) => {
    Todolist.create(req.body, (err, data) => {
        if (err) return next(err);
        res.json(data);
    })
})

router.put('/:id', (req, res, next) => {
    Todolist.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) return next(err);
        res.json(data);
    })
})

router.delete('/:id', (req, res, next) => {
    Todolist.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) return next(err);
        res.json(data);
    })
})

module.exports = router;