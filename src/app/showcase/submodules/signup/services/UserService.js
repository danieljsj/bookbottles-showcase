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

    // I think you put the user IN userService. Even if you're doing firebaseAuth, where firebase stores the user, I think you use UserService maybe to wrap it. (or maybe you use Firebase's own services. TBD.)
    	// UserService.getFirstName() / setFirstName() / etc. etc. etc.



    	// OR MAYBE USE SOME ANGULARFIRE TO MAKE A REAL FIREBASE USER;
    	// That definitely gives me a place to put my user... on the FB auth objects or whatever; just like I've been doing.
    	// Now. I notice that UserService doesn't have any dependencies.

    	// https://firebase.google.com/docs/auth/web/password-auth
    }
}

