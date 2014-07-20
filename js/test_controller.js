/// <reference path="../lib/js/angular.d.ts" />
define(["require", "exports"], function(require, exports) {
    var application = angular.module("testmodule").controller("TestController", function ($scope, Service1, Service2) {
        $scope.test1 = function () {
            Service1.service1Func();
            return "test1szoveg";
        };

        $scope.test2 = function () {
            Service2.service2Func();
            return "test2szoveg";
        };
    });

    
    return application;
});
