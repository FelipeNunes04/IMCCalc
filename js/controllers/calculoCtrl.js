app.controller('CalculoCtrl',
    function($scope, $rootScope, $location, Scopes) {

    	Scopes.store('CalculoCtrl', $scope);
    	
    	$rootScope.activetab = $location.path();

	    $scope.dados = [
			{nome:"Felipe Nunes", altura:1.78, peso:87, imc:27.46, classificacao:"Acima do Peso"},
			{nome:"Fulano de Sicrano", altura:1.70, peso:60, imc:20.76, classificacao:"Peso Normal"}
		];

	    $scope.salvarDados = function (dado) {
	    		dado.imc = dado.peso/(dado.altura*dado.altura);

	    		if(dado.imc<18.5){
	    			dado.classificacao = "Abaixo do Peso"
	    		}
	    		else{
	    			if(dado.imc>=18.5 && dado.imc<25){
	    				dado.classificacao = "Peso Normal"
	    			}
	    			else{
	    				if(dado.imc>=25 && dado.imc<30){
	    					dado.classificacao = "Acima do Peso"
	    				}
	    				else{
	    					if(dado.imc>=30 && dado.imc<35){
	    						dado.classificacao = "Obesidade I"
	    					}
	    					else{
	    						if(dado.imc>=35 && dado.imc<40){
	    							dado.classificacao = "Obesidade II (severa)"
	    						}
	    						else{
	    							if(dado.imc>40){
	    								dado.classificacao = "Obesidade III (mórbida)"
	    							}
	    						}
	    					}
	    				}
	    			}
	    		}
				
	    		$scope.dados.push(angular.copy(dado));
				delete $scope.dado;
				alert("Dados enviados com sucesso!");
				
	    }

});
