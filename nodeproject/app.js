var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Aloha World!');
});

app.get('/routing', function(req, res){
    res.send('Aloha Routing!');
});

var port = process.env.PORT;
app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
    
});

app.use(express.static('public'));

app.use(express.static('src/views'));