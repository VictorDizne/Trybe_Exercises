const fs = require('fs');

function readFile(filename) {
  try {
    const fileContent = fs.readFileSync(filename, 'utf-8');

    return fileContent;
  } catch (err) {
    return null;
  }
}

module.exports = readFile;