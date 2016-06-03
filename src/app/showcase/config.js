'use strict';

module.exports = config;

/**
 * @ngInject
 */
function config($urlRouterProvider, $locationProvider) { // param names used to get services. the "simpler" albeit potentially more confusing&conflicting way to do it
    // running some configurations on various services using methods from within them
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}