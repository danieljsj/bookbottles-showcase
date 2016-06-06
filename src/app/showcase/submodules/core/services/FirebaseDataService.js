'use strict';

module.exports = FirebaseDataService;

// based on: https://github.com/gordonmzhu/angular-course-demo-app-v2/blob/master/src/app/core/firebaseData.service.js

FirebaseDataService.$inject = ['Firebase'];

function FirebaseDataService(/*FIREBASE_URL maybe later via a Constants service,*/ Firebase) {

	console.log(Firebase);

	var root = new Firebase(/*FIREBASE_URL*/ 'https://fighter-jets.firebaseio.com'); // just the url; no auth just yet.

	var service = {
	  root: root,
	  users: root.child('users'),
	};

	return service;
}
