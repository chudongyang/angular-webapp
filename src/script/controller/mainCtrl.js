angular.module('app').controller('mainCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('data/positionList.json').then(function (res) {
        //console.log(res.data);
        $scope.lists = res.data;
    },function (err) {

    });
}]);