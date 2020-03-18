const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
//const massive = require('massive');
//const session = require('express-session');
require('dotenv').config();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const {getNums} = require('./controller.js')


app.use(bodyParser.json());
app.use(cors());

// massive(CONNECTION_STRING).then(dbInst => {
//     app.set("db", dbInst);
//     console.log('Connected to Database');
// })

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24
//     }
// }))

app.post('/api/nums', getNums)

app.listen(SERVER_PORT, () =>{
    console.log(`Listening on port ${SERVER_PORT}`);
})