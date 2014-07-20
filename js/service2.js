/// <reference path="../lib/js/angular.d.ts" />
define(["require", "exports"], function(require, exports) {
    var application = angular.module("testmodule").factory("Service2", function () {
        return {
            service2Func: function () {
                console.log("service2Func");
            }
        };
    });

    
    return application;
});
