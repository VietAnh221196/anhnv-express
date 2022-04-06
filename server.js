var express = require('express');
var mysql = require('mysql'); 
var app = express();

var pool = mysql.createPool({
host: 'localhost',
user: 'root',
password: null,
database: 'practice_01',
});
app.get('/user', function(req, res){

var sql = 'SELECT * FROM `cities`';
pool.query(sql, function(error, result){
if (error) throw error;
console.log('– USER TABLE — ' , result);
res.json(result); 
});
});
app.listen('2244','127.0.0.1');
console.log('—– server is listening —–');