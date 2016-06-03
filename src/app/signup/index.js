'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signup', [
    	/* 3rd Party */
        require('angular-ui-router')

        /* Custom */
        // nothing here... hmm. 
    ])
    // no .config(require('./config')) ... hmm I wonder what's the difference ...
    .config(require('./route'))

    
    // controllers:
    .controller('SignUpCtrl', require('./controllers/SignUpCtrl'))
    // service:
    .factory('UserService', require('./services/UserService'))
    .name;
