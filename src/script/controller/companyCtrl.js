angular.module('app').controller('companyCtrl',['$scope','$state','$http',function ($scope,$state,$http) {
    $http.get('/data/positionList.json').then(function (res) {
        var data = Array.prototype.slice.call(res.data);
        data = data.find(function (item) {
            return item.id == $state.params.id;
        });
        $scope.data = data;
    });
}]);