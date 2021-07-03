const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: "*" } })
var users = {}
io.on('connection', socket => {
    console.log(socket.id)
    socket.on('message', ({ name, message }) => {
        console.log('recevied message:')
        console.log('name: ' + name)
        console.log('message: ' + message)
        name = name + 'FromServer'
        io.emit('message', { name, message })
    })

    socket.on("Chat:NewUserRegister", ({ id, userName }) => {
        users[id] = userName
        io.emit("Chat:NewUserRegister", userName)
        io.emit('Chat:UsersChange', Object.values(users))
    })

    socket.on('disconnect', function () {
        delete users[socket.id]
        console.log("Chat Disconnect: users")
        console.log(users)
        io.emit('Chat:UsersChange', Object.values(users))
    });
})

server.listen(4000, function () {
    console.log('listening on port 4000')
})