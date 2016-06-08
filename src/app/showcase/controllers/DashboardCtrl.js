'use strict';

module.exports = DashboardCtrl; 

/**
 * @ngInject
 */

DashboardCtrl.$inject = ['UserService'];

function DashboardCtrl(UserService) { 

    var vm = this; 

    vm.foo = 'bar';

    // controllers/modules common: // todo:find a better way...
    vm.userIsLoggedIn = UserService.isLoggedIn;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:
    vm.logout = UserService.logout;


}