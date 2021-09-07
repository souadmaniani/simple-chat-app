const express = require('express')
const router = express.Router()
const model = require('../model')

router.get('/', async (req, res) => {
    try {
        const data = await model.find({})
        res.send({data})
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {

    try {
        await model.create(req.body)
        globalVariable.io.emit('message', req.body)
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router