'use strict';

module.exports = SignUpCtrl; // var/fn name here is not important; just self-documenting. filename is what counts.

/**
 * @ngInject
 */
function SignUpCtrl(UserService) { // this controller fires once when the route/"state" is hit/visited. it's getting UserService off the showcase.signup module
										// but it probably could have gotten services registered just about anywhere up the tree... 
											// OR COULD IT; no, I don't think the module can see services or any other "mini-modules" registered in its "parent module" 
												// because it can't see its "parent module" at all! 
													// Hence why we had to keep requiring 'angular-ui-router' in all the different modules (both 'showcase' and 'showcase.signup').
    var vm = this; // I think this is just some self-documenting code; 
    					// I could just have easily said this.signUp = UserService.create... but this is to tell me that 'this' in all controllers is the 'vm'. 
    						// WAIT... how is this different from angular's $scope? 
    							// We're using angular for making all the modules and such... but I haven't seen any sign of $scope... 
    								// why 'vm' instead of '$scope'??? ... must be specific to angular-ui-router??
    									// https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/
    										// vm == View's Model (aka ViewModel)          (! not in any way related to virtualmachine like what jquery runs all its $.load()ed scripts into...)
    											// 
    												// WHOAH... okay, well there it is. I've only used <div ng-controller="MyCtrl">, never "MyCtrl as {var}"...
    													// you're literally passing the controller itself onto... the (not-visibly-typed-out) $scope! 
    														// Now. Why is that better than using the controller with the $scope service as a dependency, where the controller dumps stuff on to the $scope inside its own execution?
    															// well, it feels cleaner... better to have the controller dump its whole self, quite like a module.exports, onto the $scope within the template via an 'as' statement, than to get this weird $scope variable -- that you don't know where it came from or what else is on it or why -- injected/dangled into your controller to wreak havoc on! (and perhaps to have $scope wreak havoc within your controller!). More module. Like a module.exports. I like it.

    vm.signUp = UserService.create; // we're publishing' just this one method from UserService into the 'vm'/ View's Model

}