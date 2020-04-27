const filteredLs = require('./mymodule');

filteredLs(process.argv[2], process.argv[3], (error, files) => {
    if(error) {
        console.error(error);
        return;
    }
    files.forEach((file) => {
        console.log(file);
    });
});
