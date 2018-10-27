const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport-jwt');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database, { useNewUrlParser: true });

//If connection is on
mongoose.connection.on('connected', () => {
    console.log('Connect to database ' +config.database)
});

//If there is an error in connecting to db
mongoose.connection.on('error', (err) => {
    console.log('database error ' +err)
});

const app = express(); //initialize app variable with express 

//
const users = require('./routes/users');

//Port number
const port = 3000;

//Cors Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index Router
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});
//Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});


