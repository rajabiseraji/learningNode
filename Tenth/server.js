var net = require('net');
const PORT = Number(process.argv[2]);

function createDate() {
    let date = new Date();
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}\n`;
}

var server = net.createServer((socket) => {
    let date = createDate();
    socket.end(date);
});
server.listen(PORT);