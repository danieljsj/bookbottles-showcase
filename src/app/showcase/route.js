'use strict';

module.exports = route;

/**
 * @ngInject
 */
function route($stateProvider) {
    // Configure states here
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./templates/home.tpl.jade')
        })
        .state('dashboard', {
            url: '/dashboard',
            template: require('./templates/dashboard.tpl.jade')
        })
    ;
}
