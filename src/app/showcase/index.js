'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('./submodules/signup') // moved to submodules directory since it is named as a child/submodule of 'showcase'
    ])
    .config(require('./config'))
    .config(require('./route'));
