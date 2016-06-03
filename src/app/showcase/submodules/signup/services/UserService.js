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
    //     return {
    //     	firstName: "Jane",
    //     	lastName: "Doe",
    //     	email: "jane@doe.com",
    //     	id: Math.round(Math.random()*10^10)
    //     };

    	// OR MAYBE USE SOME ANGULARFIRE TO MAKE A REAL FIREBASE USER
    }
}

