const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const {getNums} = require('./controller.js')

app.use(express.json());

massive(CONNECTION_STRING).then(dbInst => {
    app.set("db", dbInst);
    console.log('Connected to Database');
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.get('/api/nums', getNums)

app.listen(SERVER_PORT, () =>{
    console.log(`Listening on port ${SERVER_PORT}`);
})