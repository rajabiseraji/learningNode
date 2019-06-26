var getFileList = require('./fsList');
getFileList(process.argv[2], process.argv[3], (err, data) => {
    if(err) {
        console.error('there was error');
    } else {
        for (const iterator of data) {
            console.log(iterator)
        }
    }
})