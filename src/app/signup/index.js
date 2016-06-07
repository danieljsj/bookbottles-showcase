'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signup', [ 
    	/* 3rd Party */
        require('angular-ui-router'),
        require('angularfire'),

        /* Custom */

    ])
    .config(require('./route')) 
    .controller('SignUpCtrl', require('./controllers/SignUpCtrl'))
    .controller('LogInCtrl', require('./controllers/LogInCtrl'))
    .factory('UserService', require('./services/UserService')) 
    .name;
