var express   = require('express');
var app       = express();
var fs        = require("fs");
var swig      = require('swig');
var bodyParser   = require('body-parser');
var basicAuth    = require('basic-auth-connect');

app.use(express.static('public'));
app.use(bodyParser());

var auth_user = process.env.AUTH_USER || 'duedil';
var auth_pass = process.env.AUTH_PASS || 'duedil!!9001';
app.use(basicAuth(auth_user, auth_pass));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname + '/');

app.get('/', function(req, res) {
  res.render('index.html');
});

var server = app.listen(process.env.PORT || '9001', function() {
    console.log('Listening on port %d', process.env.PORT || '9001');
});
