const express = require('express');
const body = require('body-parser');
const load = require('express-load');

app = express();

app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use(express.static('public'));
app.set('port', 3000);

app.set("view engine", "ejs");

load('models', { cwd: './' }).then('controllers').then('routes').into(app);

module.exports = app;