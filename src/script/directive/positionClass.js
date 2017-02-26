angular.module('app').directive('appPositionClass',[function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionClass.html',
        scope:{
            data:'='
        },
        link:function (scope) {
            scope.isActive = 0;
            scope.showActive = function (index) {
                scope.lists = scope.data.positionClass[index].positionList;
                scope.isActive = index;
            };
            scope.$watch('data',function (newVal,oldVal) {
                 if(newVal){
                     scope.showActive(0);
                 }
            });
        }
    }
}]);