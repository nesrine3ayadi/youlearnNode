const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (error, fileList) => {

    const filteredFiles = fileList.filter((file) => {
        return path.extname(file) === '.' + process.argv[3];
    });

    filteredFiles.forEach((file) => {
        console.log(file);
    });
});