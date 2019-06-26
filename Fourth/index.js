var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if(err) {
        console.error('there was an error');
    } else {
        console.log(data.split('\n').length - 1);
    }
})