/// <reference path="../lib/js/angular.d.ts" />

var application = angular.module("testmodule", [])
.factory("Service1", function() {
	return {
		service1Func: function() {
			console.log("service1Func")
			return("service1Func");
		}
	}
})
export = application;