'use strict';

module.exports = DashboardCtrl; 

/**
 * @ngInject
 */

DashboardCtrl.$inject = ['UserService'];

function DashboardCtrl(UserService) { 

    var vm = this; 

    vm.foo = 'bar';

    // // TODO: perhaps look for a less repetitive way to add these more common, public methods to all scopes? condense them into a single 'UserService.commonMethods' object?
    // controllers/modules common:
    vm.userLoggedIn = UserService.isLoggedIn;
    // debug / maybe-common:
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:
    vm.logout = UserService.logout;


}