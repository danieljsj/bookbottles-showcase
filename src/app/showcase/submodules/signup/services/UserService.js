'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService() {


  var config = {
    apiKey: "AIzaSyB0wRqUQWX0nfOl7TC8ydGgs0MGXnLJ_9Y", // public; okay to include in the repo.
    authDomain: "fighter-jets.firebaseapp.com",
    databaseURL: "https://fighter-jets.firebaseio.com",
    storageBucket: "fighter-jets.appspot.com",
  };
  firebase.initializeApp(config);



	// adapted from: https://github.com/gordonmzhu/angular-course-demo-app-v2/blob/master/src/app/auth/auth.service.js
  // except that it had some v2.x API versions of fb data auth stuff... i think... in any case I'm simplifying and am going to include my FB data stuff here in this module more simply.

    var service = { // renamed to more generic 'service' (per the example) so we're clear about when the name matters and when it doesn't. 
  	  // firebaseAuthObject: firebaseAuthObject,
      create: create,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      // sendWelcomeEmail: sendWelcomeEmail
    };

    return service;

 

    ////////////

    function create(userData) {
      console.debug('Creating a user you betcha!');
      // return firebaseAuthObject.$createUser(userData);

      firebase.auth().createUserWithEmailAndPassword("test1@test1.com", "test123").catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    }

    function login(userData) {
      // return firebaseAuthObject.$authWithPassword(userData);
    }

    function logout() {
      // SOME_MAIN_Service.reset(); // perhaps coming soon;
      // firebaseAuthObject.$unauth();
    }

    function isLoggedIn() {
      // return firebaseAuthObject.$getAuth();
    }

    function sendWelcomeEmail(emailAddress) {
      // firebaseDataService.emails.push({
      //   emailAddress: emailAddress
      // });
    }

}
