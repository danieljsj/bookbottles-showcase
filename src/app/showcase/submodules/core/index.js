'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.core', [
    	// require() // NEEDED! REQUIRE FIREBASE_URL_HERE
    ])
    .factory('FirebaseDataService', require('./services/FirebaseDataService'))
    .name;