var express   = require('express');
var app       = express();
var fs        = require("fs");
var swig      = require('swig');
var bodyParser   = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser());

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname + '/');

app.get('/', function(req, res) {
  res.render('index.html');
});

var server = app.listen(process.env.PORT || '9001', function() {
    console.log('Listening on port %d', process.env.PORT || '9001');
});
