const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  let file = '';
  if(req.url === '/'){
    file = __dirname + '/www/index.html'
  } else {
    file = __dirname + req.url
  }
  fs.readFile(file, (err, data)=>{
    console.log('log file', file)
    if(err){
      res.writeHead(404);
      res.write('404 File Not Found')
    } else {
      res.write(data)
    }
    res.end()
  })
})

myServer.listen(7000, 'localhost', (err) => {
  if(!err){console.log('running at localhost:7000!')}
})
