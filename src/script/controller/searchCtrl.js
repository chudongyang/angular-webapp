angular.module('app').controller('searchCtrl',['$scope','$http','dict',function ($scope,$http,dict) {
    $scope.name = '';
    $scope.search = function () {
        $http.get('data/positionList.json?name='+ $scope.name).then(function (res) {
            $scope.data = res.data;
        });
    };
    $scope.search();
    $scope.tabList = [
        {
            id:'city',
            name:'城市'
        },
        {
            id:'salary',
            name:'薪水'
        },
        {
            id:'scale',
            name:'公司规模'
        }
    ];
    $scope.tClick = function (id,name) {
        console.log(id,name);
        $scope.list = dict[id];
        $scope.visible = true;
        console.log($scope.list,$scope.visible)
    };
    $scope.sClick = function (id,name) {
        console.log(id,name);
    }
}]);
