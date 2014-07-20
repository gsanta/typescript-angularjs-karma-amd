/// <reference path="../lib/js/angular.d.ts" />

var application = angular.module("testmodule")
.factory("Service2", function() {
	return {
		service2Func: function() {
			console.log("service2Func")
		}
	}
})

export = application;