const http = require('http');
const fs = require('fs')
const os = require('os')
const events = require('events')

// http.createServer((req,res) => {
//     fs.readFile('../walkingman.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//       });
//     fs.readFile('../sat4.css', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/css'});
//         res.write(data);
//         return res.end();
//       });

// }).listen(8080)

const datastream = fs.createReadStream("../base.txt")

datastream.on('stream',() => {
    console.log(datastream);
    // let chunk
    // while (null !== datastream.read()) {
    //     console.log(`read : ${chunk}`);
    // }
})




