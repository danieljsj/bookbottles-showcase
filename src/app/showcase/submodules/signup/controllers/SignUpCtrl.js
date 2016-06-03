'use strict';

module.exports = SignUpCtrlLALALA; // LALALA denotes that var/fn name here is not important

/**
 * @ngInject
 */
function SignUpCtrlLALALA(UserService) {
    var vm = this;

    vm.signUp = UserService.create;
}

