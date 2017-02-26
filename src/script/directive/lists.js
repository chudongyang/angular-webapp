angular.module('app').directive('appLists',[function () {
    return {
        restrict:'A',
        replace: true,
        templateUrl: 'view/template/lists.html',
        scope:{
            data:'='
        }
    }
}]);