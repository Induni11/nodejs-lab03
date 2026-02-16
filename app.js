const fs = require('fs');
const http = require('http');

console.log("Hello Node.js!");

// ===== Write to file first =====
fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');

    // ===== Read the file AFTER it has been written =====
    fs.readFile('file.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log('File content:', data);
    });
});

// ===== Web Server =====
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World from the server!');
    res.end();
}).listen(8080, () => console.log('Server running on http://localhost:8080'));
