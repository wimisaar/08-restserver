require('./config/config');

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Routes
app.use(require('./routes/index'));

mongoose.connect(
    process.env.URLDB, 
    {   
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false 
    },
    (err, res) => {
        if (err) throw err;
            console.log('Base de datos ONLINE');
        }
);



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});