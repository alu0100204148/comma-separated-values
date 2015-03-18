/*
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


app.get('/', function (request, response) {
    response.render('index', { title: 'Comma Separated Value Analyzer' });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
*/




//var _ = require('underscore');
//var $ = require('jquery');
var express = require('express');
var app = express();
var path = require('path');
//var expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 5000));

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.use(expressLayouts);

app.use(express.static(__dirname + '/'));

app.get('/', function (request, response) {
    response.render('index', { title: 'Comma Separated Value Analyzer' });
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});




/*
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
})

app.get('/chuchu', function (req, res) {
  var isAjaxRequest = req.xhr;
  console.log(isAjaxRequest);
  if (isAjaxRequest) {
    console.log(req.query);
    res.send('{"answer": "Server responds: hello world!"}')
  }
  else {
    res.send('not an ajax request');
  }
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});

*/
/*
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');


//app.use(express.static(__dirname + '/public'));
app.use(express.static('/public'));

app.get('/', function (request, response) {
    response.render('index', { title: 'Comma Separated Value Analyzer' });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

*/