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
app.use('/static', express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
