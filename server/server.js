const path = require('path');
const express = require('express')
const app = express()
const port = 3333

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', function(req, res) {
//   res.sendFile('./index.html');
// });

// using the code below, navigate to http://localhost:3333/static/ to get index.html
// also, index.html has
//      <script src="./build/bundle.js"></script>
// and the build directory is copied to be a sibling of index.html under public.
// app.use('/static', express.static('public'))

const pathToIndex = path.join(__dirname, 'public', 'index.html');
const pathToCSS = path.join(__dirname, 'public', 'css', 'app.css');
const pathToBundle = path.join(__dirname, 'public', 'build', 'bundle.js');

// app.get('/index.html', function (req, res) {
//   console.log('request received, req is:')
//   console.log(req);
//   res.sendFile(fullPath);
// });

// app.get('*', function (req, res) {
//   console.log('req.url: ', req.url);
//   res.sendFile(pathToIndex);
// });

app.get('/index.html', function (req, res) {
  res.sendFile(pathToIndex);
});

app.get('/css/app.css', function (req, res) {
  res.sendFile(pathToCSS);
});

app.get('/build/bundle.js', function (req, res) {
  res.sendFile(pathToBundle);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
