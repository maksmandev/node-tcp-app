const net = require('net')

// local
const HOST = '127.0.0.1'
/*daemon
const HOST = '109.3.205.154'
*/
const PORT = 2000
const client = new net.Socket()

client.connect(PORT, HOST, () => {
    console.log(`connected to ${HOST}:${PORT}`)
    client.write('It works!')
})

client.on('data', data => {
    console.log(data)
    client.destroy()
})

client.on('close', () => {
    console.log('Connection closed')
})
