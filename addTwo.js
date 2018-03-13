(function() {

		var name = "myApp",requires = [],myApp = null;

		myApp = angular.module(name, requires);

		myApp.controller("appCtrl", function() {
			this.calculate = function() {
				this.result = parseInt(firstNum) + parseInt(secondNum);
				}
		});
	}());