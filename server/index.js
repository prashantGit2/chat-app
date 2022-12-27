const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const port = 4500 || process.env.PORT

app.use(cors());
app.get('/', (req, res) => {
    res.send("Hell is working!")
})

const server = http.createServer(app);

const io = socketIO(server)

io.on("connection", ()=> {
    console.log("new connection");
})



server.listen(port, ()=> {
    console.log(`Server listening on port http://localhost:${port}`);
})