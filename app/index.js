'use strict';

var Angular   = require('angular');
var Recaptcha = require('angular-recaptcha');
var Router    = require('angular-ui-router');

var Account  = require('./account');
var Config   = require('./config');
var Home     = require('./home');
var Run      = require('./run');
var Services = require('./services');
var Create = require('./create');

require('./styles');

module.exports = Angular.module('postcard-create', [
  Account,
  Create,
  Home,
  Recaptcha,
  Router,
  Services
])
.config(Config)
.run(Run)
.name;
