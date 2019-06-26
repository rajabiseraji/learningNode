var http = require('http');
let URL = process.argv[2];

http.get(URL, (response) => {
    response.setEncoding("utf8");
    response.on('data', (data) => {
        console.log(data);
    });
    response.on('error', (data) => {
        console.error(data);
    })
})