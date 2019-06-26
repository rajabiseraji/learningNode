var http = require('http');
var bl = require('bl');
let URL = process.argv[2];

http.get(URL, (response) => {
    response.setEncoding("utf8");
    response.pipe(bl((err, data) => {
        if(err) {
            console.error('There was error: ', err);
        } else {
            let stringData = data.toString();
            console.log(stringData.length);
            console.log(stringData);
        }
    }))
})