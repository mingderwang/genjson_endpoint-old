const getFilePaths = require('./utils/getFilePaths')
const rreaddir = require('./utils/readdir')
const rreaddirSync = require('./utils/rreaddirSync')

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to");
    process.exit(-1);
}
var root_path = process.argv[2];

var result = getFilePaths(root_path);

