var express = require('express');
var app = express();
app.get('/user', function(req, res){
res.send('Hello!!!');
});
app.listen('2244','127.0.0.1');
console.log('—– server is listening —–');