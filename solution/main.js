const express = require('express');
const cors = require('cors');

const router = require('./Router/index.js');
const sequelize = require('./match');

const trans = express();

const host = 'localhost';
const port = 8833 ;

trans.use(cors());
trans.options('*',cors());

trans.use(express.json());
sequelize.sync();

trans.use('/',router);

trans.listen(port,host, () =>{
    console.log(`Server is running on at ${host}:${port}`)
})


