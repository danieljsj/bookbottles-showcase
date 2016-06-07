'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),
        require('angularfire'),

        /* Custom */
        require('../signup')
    ])
    .config(require('./config'))
    .config(require('./route'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
;
