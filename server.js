const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
const router = require('./routes')
const socket = require('socket.io')


const port = 4000
dotenv.config()

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use('/api/v1/chat', router)


const start = async ()=> {
    try {
        await connectDB(process.env.DB_URL)
        var server = app.listen(port, ()=> console.log(`listening on port ${port}`))
        // Socket Setup
        var io = socket(server)
        global.globalVariable = { io: io };
        // Listen For Event Connection
        io.on('connection', (socket)=> {
            console.log('client connected', socket.id);
        })
    } catch (error) {
        console.log(error);
    }
}

start()