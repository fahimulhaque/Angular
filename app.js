(function() {

var name = "myApp" , requires = [] , myApp = null;

myApp = angular.module(name, requires);

	myApp.service("Addsvc", function() {

		this.add = function(firstNumber , secondNumber){

			return parseInt(firstNumber) + parseInt(secondNumber);
		}
		
	});

	myApp.service("Subsvc", function(){

		this.sub = function(firstNumber , secondNumber) {
		
		return parseInt(firstNumber) - parseInt(secondNumber);

		}
	});

	myApp.controller('AppCtrl', function(Addsvc,Subsvc){
		
		this.operator = '+' ;

		this.setOperation = function(operator){

			this.operator = operator;
		}

		this.calculate = function(firstNumber , secondNumber){

			if(this.operator === "+"){
				this.result = Addsvc.add(firstNumber , secondNumber);

		}

		else if (this.operator === "-"){

			this.result = Subsvc.sub(firstNumber , secondNumber);

			}
		};

		
	});

}());