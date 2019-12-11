const postJson = require('./utils/postJson')
// Import the module
var readdirp = require('readdirp');


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to");
    process.exit(-1);
}

var root_path = process.argv[2];

var options = {
  fileFilter: ['*','!*.iso','!*.zip','!*.tz'],
  directoryFilter: ['!.git', '!*modules'],
  // directoryFilter: (di) => di.basename.length === 9
  type: 'files_directories',
  depth: 9
}

// In this example, this variable will store all the paths of the files and directories inside the providen path
var allFilePaths = [];

// Iterate recursively through a folder
readdirp(root_path, options)
    .on('data', function (entry) {
        // execute everytime a file is found in the providen directory

        // Store the fullPath of the file/directory in our custom array
        allFilePaths.push(
            entry.fullPath
        );
        console.log("---->",entry.fullPath)
        postJson(entry.fullPath);
    })
    .on('warn', function(warn){
        console.log("Warn: ", warn);
    })
    .on('error', function(err){
        console.log("Error: ", err);
    })
    .on('end', function(){

        console.log(allFilePaths);
        // ["c:/file.txt","c:/other-file.txt" ...]
    })
;

