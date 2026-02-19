const fs = require('fs');
const http = require('http');

console.log("This is a collaborative test by gayasha");


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


//HTTP Request

const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  // A chunk of data has been received
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});


//q5
const myModule = require('./my-module.js');

console.log(myModule.myFunction());


// ===== Promises =====
const condition1 = true;

const myPromise1 = new Promise((resolve, reject) => {
  if (condition1) resolve('Success!');
  else reject('Failure!');
});

myPromise1
  .then(result => console.log('Promise result:', result))
  .catch(error => console.log('Promise error:', error));

// ===== Async/Await =====
const condition2 = true;

const myPromise2 = new Promise((resolve, reject) => {
  if (condition2) resolve('Success with Async/Await!');
  else reject('Failure with Async/Await!');
});

async function myAsyncFunction() {
  try {
    const result = await myPromise2;
    console.log('Async/Await result:', result);
  } catch (error) {
    console.log('Async/Await error:', error);
  }
}

myAsyncFunction();



