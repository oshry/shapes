/**
 * Created by oshry on 4/14/15.
 */
require.config({
    baseUrl: "",

    // alias libraries paths.  Must set 'angular'
    paths: {
        'jquery': '../app/assets/vendor/jquery/dist/jquery.min',
        //'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
        'angular': '../app/assets/vendor/angular/angular.min',
        //'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
        'angular-route': '../app/assets/vendor/angular-route/angular-route.min',
        //'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min'
        'angularAMD': '../app/assets/vendor/angularAMD/angularAMD.min'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },

    // kick start application
    deps: ['app']
});


