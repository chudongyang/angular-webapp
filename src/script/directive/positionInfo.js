angular.module('app').directive('appPositionInfo',[function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionInfo.html',
        scope:{
            isActive: '=',
            isLogin:'=',
            data:'='
        },
        link: function (scope) {
            scope.imagePath = scope.isActive?'image/star-active.png':'image/star.png';
        }
    }
}]);