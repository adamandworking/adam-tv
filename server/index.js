const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: "*" } })
var users = {}
io.on('connection', socket => {
    console.log(socket.id)

    socket.on("Chat:NewUserRegister", ({ id, userName }) => {
        users[id] = userName
        io.emit('Chat:UsersChange', Object.values(users))
    })

    socket.on('Chat:NewMessage', ({ name, message }) => {
        io.emit('Chat:NewMessage', { name, message })
    })

    socket.on('disconnect', function () {
        delete users[socket.id]
        io.emit('Chat:UsersChange', Object.values(users))
    });
})

server.listen(4000, function () {
    console.log('listening on port 4000')
})