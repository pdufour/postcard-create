'use strict';

var Angular  = require('angular');
var API      = require('./api');
var Auth     = require('./auth');
var Cookies  = require('angular-cookies');
var Postcard = require('./postcard');
var Session  = require('./session');

module.exports = Angular.module('postcard-create.services', [
  Cookies
])
.factory('API', API)
.factory('Auth', Auth)
.factory('Postcard', Postcard)
.factory('Session', Session)
.name;
