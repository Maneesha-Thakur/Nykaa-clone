import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors'
import bodyParser from 'body-parser'; 

import DefaultData from './default.js';
import router from './routes/route.js';

  

const app = express()

app.use(cors())
app.use(bodyParser.json({extented:true}));
app.use(bodyParser.urlencoded({extended:true}));
// app.use('/',Router);
app.use('/',router);

const PORT= 8000; 
  
app.listen(PORT, () => {
    Connection();
    console.log(`Server is running on ${PORT}`)
})

DefaultData();

// "type":"module"