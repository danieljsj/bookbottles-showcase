'use strict';


module.exports = require('angular')
    .module('bookbottles.showcase.core', [
    	require('angularfire')
    ])
    .factory('FirebaseDataService', require('./services/FirebaseDataService'))
    .name;