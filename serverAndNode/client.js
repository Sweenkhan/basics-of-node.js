import net from 'net'

const client = net.createConnection({port: 8080}, () => {
  console.log("Connected to the Server");

  client.write("Hello there server");
})

client.on('data', (data) => {
  console.log("Acknowledgement: "+ data)
})

client.on('close', () => {
  console.log("Connection closed");
})