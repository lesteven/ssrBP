import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';


const serverSetup = (app) => {
  app.use(helmet());
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());


  // serve static files
  app.use(express.static('dist'));
  app.use(express.static('imgs'));
};

export default serverSetup;
