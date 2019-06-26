module.exports = function (URL, index, callback) {
    var http = require('http');
    var bl = require('bl');
    http.get(URL, (response) => {
        response.setEncoding("utf8");
        response.pipe(bl((err, data) => {
            if (err) {
                callback(err);
            } else {
                let stringData = data.toString();
                callback(null, {stringData, index});
            }
        }))
    })
}