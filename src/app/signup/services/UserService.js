'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
// Should I be using that @ngInject to inject things? Seems more intuitive to do this:
UserService.$inject = ['$state','$rootScope'];


function UserService($state,$rootScope) {

  // this could go a number of places; for now I'm putting in in UserService since it's related.
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
      getAuth: getAuth,
      getCurrentUser: getCurrentUser,
      getCurrentUserJSON: getCurrentUserJSON,
      // resetPassword: resetPassword,
      // getUserData: getUserData,
      // sendWelcomeEmail: sendWelcomeEmail,
    };

    return service;

    ////////////

    function create(userData) {
      console.debug('Creating a user with userData: ', userData);
      // return firebaseAuthObject.$createUser(userData);

      firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
      .then(
        function(){
          UserService.login(userData);
        },
        function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }
      );
    }

    function login(userData) {
      console.debug('Logging In...');
      // return firebaseAuthObject.$authWithPassword(userData);
      firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then(
        function(){
          $state.go('dashboard');
        },
        function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }
      );
    }

    function logout() {
      // SOME_MAIN_Service.reset(); // perhaps coming soon;
      // firebaseAuthObject.$unauth();
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        $rootScope.$apply();
      }, function(error) {
        // An error happened.
      });
    }

    function isLoggedIn() {
      // return firebaseAuthObject.$getAuth();
      return !! firebase.auth().currentUser;
    }

    function getAuth() {
      return firebase.auth();
    }

    function getCurrentUser() {
      return firebase.auth().currentUser;
    }

    function getCurrentUserJSON() {
      return JSON.stringify(UserService.getCurrentUser());
    }

    function resetPassword(){
      // COMINGSOON
    }

    // function getUserData(){} // COMING SOON!

    // function sendWelcomeEmail(emailAddress) {
    //   // firebaseDataService.emails.push({
    //   //   emailAddress: emailAddress
    //   // });
    // }

}
