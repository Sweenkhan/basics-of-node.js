import net from 'net'

const server = net.createServer((socket) => {
    console.log("Connection Established")

    socket.on('data', (data) => {
        console.log("Data recieved: " + data)
        socket.write("Message received, client")
    })


    socket.on('close', () => {
        console.log("Connection Closed")
    })
})


server.listen(8080, () => {
    console.log("Server has stared on port 8080")
})