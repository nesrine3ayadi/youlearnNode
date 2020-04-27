const http = require('http');
const bl = require('bl');



const endpoint = process.argv[2];

http.get(endpoint, (response) => {
    response.pipe(bl((error, data) => {
        if(error) {
            console.error(error);
            return;
        }

        console.log(data.length);
        console.log(data.toString());
    }));
});