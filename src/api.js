const express = require('express');
const serverless= require('serverless-http');

const app= express();

const router = express.Router();


app.get('/', (req, res)=>{
    res.status(200).json({
        'hi': "hellow"
    });
})

app.get('/text', (req, res)=>{
    res.status(200).json({
        'text': "hellow"
    });
})
app.use('/netlify/functions/api' ,router);

module.exports.handler = serverless(app);

