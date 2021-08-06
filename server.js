const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(require('./routes/api.js'));
app.use(require('./routes/index.js'))

.listen(process.env.PORT || 3000)
app.listen(PORT, () => {
    console.log('Now listening');
});