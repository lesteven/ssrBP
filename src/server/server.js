// server
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 3000;

/*
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
*/

app.use(express.static(path.resolve(__dirname ,'../../dist')));


// routers
app.get('/hello', function(req,res) {
    res.send("hello server!");
})

// react server side
import { handleRender } from './ssrFunctions.js';


app.use(handleRender);



app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})








