var fs = require('fs');
var path = require('path');
let extname = "." + process.argv[3];
fs.readdir(process.argv[2], (err, list) => {
    if(err) {
        console.error('there was an error');
    } else {
        let filteredList = list.filter((filename) => {
            return path.extname(filename) === extname;
        });
        for (const name of filteredList) {
            console.log(name);
        }
    }
})