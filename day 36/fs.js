const fs = require('fs');

// fs.readFile("./demo.txt", 'utf8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(data.split('\n'));
    
// });

fs.appendFile('./hello.txt', "\nthis is the text content", (err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log('file has been written');
});

fs.unlink('./hello.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log("file has been deleted");
});