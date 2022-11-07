const fs = require("fs")
function fileHandler() {

    fs.readFile(__dirname + '/text.txt', 'utf8', (err, data) => {
        if (err) { throw err };

        console.log(data);
    });
}

fileHandler()
