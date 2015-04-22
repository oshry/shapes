/**
 * Created by oshry on 4/14/15.
 */
define(['../../app', 'jquery'], function (app,$) {
    app.controller('HeaderCtrl', function($scope){
        $scope.header = "Area Calculator";
        $scope.subheader = "see simulation description";
    });
    app.controller('ShapesCtrl', function ($scope, $http) {
        var api_url = "../";
        $scope.calculate = "חשב";
        $http.get(api_url+'src/Shapes/Init.php').
            success(function(data) {
                $scope.shapes = data.matches;
            }).
            error(function(data) {
            });

        $scope.calculate_shape = function(t){
            var formula = $("#shape"+t).attr('formula');
            var q1 = $("#shape"+t+" .q1").val();
            var q2 = $("#shape"+t+" .q2").val();
            //server side calculation
            //$http.get('../src/Shapes/Init.php?formula='+formula+'&q1='+q1+'&q2='+q2).
            //    success(function(data){
            //        alert(data);
            //});
            //clint side calculation
            alert( eval(formula));
        }

    });
});
