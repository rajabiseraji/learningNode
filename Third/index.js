var fs = require('fs');

let file = fs.readFileSync(process.argv[2]);
console.log(file.toString().split('\n').length -1);