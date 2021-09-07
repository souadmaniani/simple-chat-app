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
        res.send('message sent')
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router