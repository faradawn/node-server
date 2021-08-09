const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('./hello1.html', (err, data)=>{
    if(err){
      res.writeHead(404);
      res.write('404 HTML File Not Found')
    } else {
      res.write(data)
    }
    res.end()
  })
})
``
myServer.listen(7000, 'localhost', (err) => {
  if(!err){console.log('up and running at localhost:7000!')}
})