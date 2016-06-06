'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signup', [ 
    	/* 3rd Party */
        require('angular-ui-router'),

        /* Custom */

    ])

    .config(require('./route')) 


    .controller('SignUpCtrl', require('./controllers/SignUpCtrl'))


    .factory('UserService', require('./services/UserService')) 

    .name;
