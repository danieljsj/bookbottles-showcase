'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService() {
    var UserService = {
        create: create
    };

    return UserService;

    //////////

    function create() {
        console.debug('Creating a user');
        // ... write some code here for creating this user!!!

        // COMING SOON:
        // MAYBE SOMETHING AS SIMPLE AS THIS:
        // 
    //     var user = {
    //     	firstName: "Jane",
    //     	lastName: "Doe",
    //     	email: "jane@doe.com",
    //     	id: Math.round(Math.random()*10^10)
    //     };


    // 	// TODO:QN: WHERE DO I PUT THE USER?!?!?!?!?



    	// OR MAYBE USE SOME ANGULARFIRE TO MAKE A REAL FIREBASE USER;
    	// That definitely gives me a place to put my user... on the FB auth objects or whatever; just like I've been doing.
    	// Now. I notice that UserService doesn't have any dependencies.

    	// https://firebase.google.com/docs/auth/web/password-auth
    }
}

