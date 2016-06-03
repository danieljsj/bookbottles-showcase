'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl(UserService) {
    var vm = this;

    vm.signUp = UserService.create;
}

