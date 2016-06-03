'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signup', [ // name + deps
    	/* 3rd Party */
        require('angular-ui-router')

        /* Custom */
        // nothing here... hmm. 
    ])
    // no .config(require('./config')) ... hmm I wonder what's the difference ...
    .config(require('./route')) // includes some configs, mainly a mapping of "states"(not sure I'd agree with that term) to urls, templates, and controllers
    // .require() returns the .exports object. so .config() must be taking that, detecting names of the params, passing the correct properties/services of itself with matching names down into the returned function, and letting the function call methods of those services to configure them.
    
    // controllers:
    // registering a controller; unlike in .config(), the required (...Ctrl) funcs won't be called yet, they'll be called when their route/"state" is activated.
    .controller('SignUpCtrl', require('./controllers/SignUpCtrl'))
    // service:
    // 'factory()' is a way of creating a service; the module's .exports is itself the service object.
        // whereas 'service()' would return with the 'new' keyword; the module returns a constructor function for the service which is immediately run. 
            // (sort of like how config() is used, except that the function that config() will run doesn't return anything to be kept, but instead just acts as a filter/modifier on a provider before that provider's $get() is finally run to create a service. (that delay is why config modify the service by acting prior to its creation. cuz we don't generally like modifying services after their creation... right?))
                /*
                    A 'factory'  IS_USED_ON_A_MODULE_EXPORT_THAT_IS_A: service literal
                    A 'service'  IS_USED_ON_A_MODULE_EXPORT_THAT_IS_A: service constructor
                    A 'provider' IS_USED_ON_A_MODULE_EXPORT_THAT_IS_A: configurable data object containing service constructor as .$get method
                */
    // registering a service on the module; unlike controller and config mini-modules, a service mini-module is just an object, not a function to be called. its methods can be called at various points through the app.
    
    .factory('UserService', require('./services/UserService')) // Should this be renamed to UserFactory?? I suppose not, because by the time it's been called as a service, it's now just a service object regardless of its origin. So maybe one might put some self-documentation inside the UserService file to show/remind a coder of how it is instantiated... which is basically already happening because we can see what the 'return' looks like - a service literal, a service constructor, or a service constructor inside a configurable data/context object.
    
    .name;
    // hmm. looks like the exports of the (big)(bb.showcase.signup)module is just its name....
    // interesting.
    // I'm noticing that our parent module (bb.showcase) isn't spitting itself out into a module.exports... 
        // perhaps that's its way of saying that it is at the top of the food chain; it's not exporting itself for consumption by anything else...
        // and since it's not exporting anything, it doesn't bother returning/spitting-out its .name at the end of its chain-of-bootstrapping-fn-calls.
    // I mean, I guess... I'm still not totally sure why this needs to export its name;
    // I suppose it's registering the module directly in angular itself, not into its parent module... 
            // (that wouldn't be viable/clean/possible, since it doesn't actually know what module it is being required as a child module of. in our ecosystem here it's named as a child of the '...showcase' module, but perhaps in a different ecosystem it could be being required by multiple modules (I suppose it could be required by multiple "top level" i.e. exports-lacking modules or other / normal / mid-level modules)
        // Aha... so when the 'showcase' module requires it, 'showcase' is given the submodule name ('bookbottles.showcase.signup'), as that is what 'showcase' will use to look up its new submodule from within the angular object.
