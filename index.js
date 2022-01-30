import { Server } from 'http';
import express from 'express';
import dot from 'dotenv'
import m from 'mongoose';
import appSrc from './app.js'
import CORS from './CORS.js'
import NumberModel from './models/Number.js'
import bodyParser from 'body-parser'

dot.config({path: './.env'});
const {URL} = process.env;
const Num = NumberModel(m);
const app = appSrc(express, bodyParser, CORS, Num);

const PORT = 4321;

try {
  await m.connect(URL, {useNewUrlParser: true,
    useUnifiedTopology: true });
    
  Server(app)
    .listen(process.env.PORT || PORT); 
} catch(e) {
  console.log(e.codeName);
}
