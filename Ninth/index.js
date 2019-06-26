var httpGetter = require('./httpGetter');

let strings = [];
let index = 0;
for (const URL of process.argv.slice(2)) {
    httpGetter(URL, index, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            strings.push(data);
            strings.sort((a, b) => {return a.index > b.index});
            // console.log(data.index);
            // console.log(strings[data.index]); 
            if (strings.length === 3) {
                strings.forEach(string => {
                    console.log(string.stringData);
                });
            }
        }
    });
    index++;
    if(index > 2)
        break;
}
