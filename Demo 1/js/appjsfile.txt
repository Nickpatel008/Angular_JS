var app = angular.module("myapp",[]);

app.controller("myctrl" , function($scope) {
   $scope.myname = "Dhaval";
   $scope.name2 = "Hetvi"; 
});

app.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
}); 

app.controller("c1" , function($scope) {
   $scope.buddy = [
       { name:"Dhaval" , age : "1" },
       { name:"Ahaval" , age : "1" },
       { name:"Hetvuudiii" , age : "21" }
   ]; 

   $scope.fetch = function(x) {
       $scope.fetch1 = x;
   }

});

app.controller('ctrl1' , function($scope , $http) {
   
    $http({
        method : "GET",
        url: "item.json"
    }).then(function mySuccess(response) {
        $scope.data = response.data;
    },
    function myError(response) {
        $scope.data = response.statusText;
    });

});