'use strict';
var browserify = require('browserify');
var path = require('path');

var b = browserify('./index.js');
b.bundle(function (err, src) {
    console.log(err);
    console.log(src.toString('utf-8'));
});
