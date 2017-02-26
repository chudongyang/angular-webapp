angular.module('app').directive('appSearchTab',[function () {
    return{
        restrict: 'A',
        replace: true,
        templateUrl:'view/template/searchTab.html',
        scope:{
            tabClick:'&',
            list:'='
        },
        link:function (scope) {
            scope.selectId = 'city';
            scope.click = function (tab) {
                scope.selectId = tab.id;
                scope.tabClick(tab);//通知父控制器
            }
        }
    }
}]);