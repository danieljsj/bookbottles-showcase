'use strict';

module.exports = SignUpCtrl; 

/**
 * @ngInject
 */
function SignUpCtrl(UserService) { 

    var vm = this; 

    vm.signUp = UserService.create;
    vm.login = UserService.login;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

}