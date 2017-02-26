angular.module('app').directive('appCompanySize',[function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/searchCompanySize.html',
        scope:{
            list:'=',
            visible:'=',
            select:'&'
        }
    }
}]);