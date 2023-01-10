const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// middleware
app.use(cors());
app.options('*', cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// getting the posts
app.get('/api/posts', (req, res, next)=>{
    const post = [
        {
            id : 'sdfadafdjhsdhsdfdsfkg',
            title: 'this is from server',
            content: 'server first content'
        },
        {
            id : 'sdfadafdjhsdhfkg',
            title: 'this is from server',
            content: 'server second content'
        }
    ];
    res.status(200).json({
        message: 'posts fetched successfully',
        posts : post
    })
})

// posting data
app.post('/api/posts',(req, res, next)=>{
    const post = req.body;
    res.status(200).json({
        message: 'post added successfully'
    })
})

module.exports = app;