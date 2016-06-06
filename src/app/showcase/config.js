'use strict';

module.exports = config;

/**
 * @ngInject
 */
function config($urlRouterProvider, $locationProvider) { // param names used to get services. the "simpler" albeit potentially more confusing&conflicting way to do it

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}
