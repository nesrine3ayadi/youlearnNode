const fs = require('fs');

const fileContent = fs.readFileSync(process.argv[2]).toString();
console.log(fileContent.split('\n').length - 1);