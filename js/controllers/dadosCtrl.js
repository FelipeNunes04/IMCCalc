app.controller('DadosCtrl',
    function($scope,Scopes,$rootScope, $location) {
    	Scopes.store('DadosCtrl', $scope);
    	
    	try {
		   $scope.dados = Scopes.get('CalculoCtrl').dados;
		}
		catch(err) {
		   $scope.dados = {};
		}
		
    	$rootScope.activetab = $location.path();
    });
