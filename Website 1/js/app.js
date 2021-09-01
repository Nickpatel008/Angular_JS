var app = angular.module("app" , []);

app.controller("fetchCtrl" , function ($scope , $http) {
    
    $http.get("item.json").then(function success(response) {
        $scope.data = response.data;
    },function error(response) {
        $scope.err = response.statusText;
    });

    $scope.displayData = function (x) {
        $scope.data = x;
    }

});



$(document).ready(function(){

    $('.btninsert').click(function(){
        
alert("a");

        var name = $('.iname').val();
        var category = $('.icategory').val();
        
        var insertNew = {name:name,category:category};
 


        $.getJSON("item.json" , function(data){
            let newData = {
                name: "England",
              };
              alert(data);
    
            data.JSON.stringify(newData);
            data.JSON.stringify(insertNew);
 
        });
  
    });
 
});  
 