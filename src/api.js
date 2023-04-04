const express = require('express');
const serverless= require('serverless-http');

const app= express();

const router = express.Router();


router.get('/', (req, res)=>{
    res.status(200).json({
        'hi': "hellow"
    });
})

router.get('/text', (req, res)=>{
    res.status(200).json({
        'text': "hellow"
    });
})
app.use('/netlify/functions/api' ,router);

module.exports.handler = serverless(app);

