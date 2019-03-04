const net = require('net')

const PORT = 2000
const HOST = '127.0.0.1'

const server = net.createServer(socket => {
    socket.write('Echo server\r\n')
    socket.pipe(socket)
})

server.on('error', e => {
    if (e.code === 'EADDRINUSE') {
        console.log('Address in use, retrying...')
        setTimeout(() => {
            server.close()
            server.listen(PORT, HOST)
        }, 1000)
    }
})

server.listen(PORT, HOST)