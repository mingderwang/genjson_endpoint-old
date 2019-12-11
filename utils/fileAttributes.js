const fse = require('fs-extra');

const fileInfo = (filename) => {
    console.log("file: ", filename)
    var stats = {};
    try {
  stats = fse.statSync(filename);
    const fileContents = fse.readFileSync(filename);
    const fileBase64 = fileContents.toString('base64');
  stats['data'] = fileBase64
  stats['file_path'] = filename
  console.log("File exists.");
        return stats
}
catch (e) {
  console.log("File does not exist.");
}
}

module.exports = fileInfo
