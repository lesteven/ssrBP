// server
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 3000;


// react server side
import React from 'react';





// static files
app.use(express.static(path.resolve(__dirname ,'../../dist')));
app.use('/',express.static(path.resolve(__dirname ,'../client/public')));

// routers
app.get('/hello', function(req,res) {
    res.send("hello server!");
})

// redirect to client

app.get('*', function(req,res){
    const react = path.resolve(__dirname, '../client/public/index.html');
    res.sendFile(reaact);
})


app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})
