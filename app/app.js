/**
 * Created by oshry on 4/14/15.
 */
define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/shapes", angularAMD.route({
                templateUrl: './views/shapes.html', controllerUrl: './assets/js/controller_shapes'
            }))
            //.when("/view1", angularAMD.route({
            //    templateUrl: './views/view_view1.html', controller: 'View1Ctrl', controllerUrl: './assets/js/controller_view1'
            //}))
            .otherwise({redirectTo: "/shapes"});
    });

    return angularAMD.bootstrap(app);
});