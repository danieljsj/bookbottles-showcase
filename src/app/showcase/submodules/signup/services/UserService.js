'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService($firebaseAuth, FirebaseDataService/*, SOME_MAIN_Service*/) {

	// adapted from: https://github.com/gordonmzhu/angular-course-demo-app-v2/blob/master/src/app/auth/auth.service.js

	var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);

    var service = { // renamed to more generic 'service' (per the example) so we're clear about when the name matters and when it doesn't. 
    	firebaseAuthObject: firebaseAuthObject,
        create: create,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
        sendWelcomeEmail: sendWelcomeEmail
    };

    return service;

 

    ////////////

    function create(userData) {
      console.debug('Creating a user');
      return firebaseAuthObject.$createUser(userData);
    }

    function login(userData) {
      return firebaseAuthObject.$authWithPassword(userData);
    }

    function logout() {
      // SOME_MAIN_Service.reset(); // perhaps coming soon;
      firebaseAuthObject.$unauth();
    }

    function isLoggedIn() {
      return firebaseAuthObject.$getAuth();
    }

    function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }

}
