# qrcode generator

## Example Code

 - Generator From Get Parameter : 
 - Return SVG Tag
 - Listening on 3000
 - Unique Tag use MongoDB

```javascript
const qr = require('qr-image') // use qr-image
const express = require('express') // use express
const bodyParser= require('body-parser') // use bodyParser


var app = express() // assign app to express ()
app.use(bodyParser.urlencoded({extended: true})) // enable urlencoded

app.listen(3000) // run server

app.get('', (req, res) => {
    res.send(new Date())
}) // index timestamp

app.get('/getCode/:tag', (req, res) => {  
  var code = qr.image(req.params.tag.toString(), { type: 'svg' })
  res.type('svg')
  code.pipe(res)
}) // method get tag generator

```

## Docker 

- Coming Soon !

## Nginx Proxy Pass

- Tested on Ubuntu 16.10 :cake:
```
server {
    listen 80;

    server_name example.com;

    location / {
        proxy_pass http://APP_PRIVATE_IP_ADDRESS:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
