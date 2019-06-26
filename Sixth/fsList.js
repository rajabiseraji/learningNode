module.exports = getFileList;
function getFileList(inputPath, extension, callback) {
    var fs = require('fs');
    var path = require('path');
    let extname = "." + extension;
    fs.readdir(inputPath, (err, list) => {
        if (err) {
            callback(err);
        } else {
            let filteredList = list.filter((filename) => {
                return path.extname(filename) === extname;
            });
            callback(null, filteredList);
        }
    })
}