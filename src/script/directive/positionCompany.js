angular.module('app').directive('appCompany',[function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionCompany.html',
        scope:{
            data:'='
        }
    }
}]);