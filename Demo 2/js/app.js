var app = angular.module("app" , []);
app.controller("myctrl" , function($scope , $timeout) {
   $scope.city = "Surat" 
   
   $timeout(function () {
      $scope.pincode = "123456" 
   },3000);

});

app.controller("fetchData" , function($scope , $http) {
   
    $http.get("item.json").then(function SuccessData(response) {
       $scope.data = response.data; 
    },
    function errorData(response) {
        $scope.err = response.statusText;
    });

    $scope.searchData = function(x) {
        $scope.searchData = x;
    }

});