// server
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 3000;


// react server side
import { handleRender } from './ssrFunctions.js';

// routers
app.get('/hello', function(req,res) {
    res.send("hello server!");
})


app.use(handleRender);



app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})








