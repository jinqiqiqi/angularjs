var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic('./angularjs/')
).listen(5000);
