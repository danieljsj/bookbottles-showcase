'use strict';

module.exports = SignUpCtrl; 

/**
 * @ngInject
 */
function SignUpCtrl(UserService) { 

    var vm = this; 

    // // TODO: perhaps look for a less repetitive way to add these more common, public methods to all scopes? condense them into a single 'UserService.commonMethods' object?
    // controllers/modules common:
    vm.userLoggedIn = UserService.isLoggedIn;
    // debug / maybe-common:
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:
    vm.signup = UserService.create;

}