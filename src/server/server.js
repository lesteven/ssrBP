//server
var express = require('express');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
var port = process.env.PORT || 3000;
var path = require('path');
var bodyParser = require('body-parser');


// static files
app.use(express.static(path.resolve(__dirname ,'../../dist')));
app.use('/',express.static(path.resolve(__dirname ,'../client/public')));


// routers
app.get('/hello', function(req,res) {
    res.send("hello server!");
})


// redirect to client
app.get('*', function(req,res){
    res.sendFile(path.resolve(__dirname ,'../client/public/index.html'))
})


app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})
