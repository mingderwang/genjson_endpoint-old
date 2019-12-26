'use strict'
const readdirp = require('readdirp');

// some filters as options of readdirp
const options = {
  fileFilter: ['*','!*.iso','!*.zip','!*.tz'],
  directoryFilter: ['!.git', '!*modules'],
  // directoryFilter: (di) => di.basename.length |=== 9
  type: 'files_directories',
  depth: 9
}

const getFilePaths = (root_path) => {
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
}
module.exports = getFilePaths
