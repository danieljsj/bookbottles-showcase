'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('../signup') // OOOH, requiring that whole sub-module (at its index.js)
        // soon: require('./submodules/signup') // clearer. removes confusions.
    ])
    .config(require('./config'))
    .config(require('./route'));
