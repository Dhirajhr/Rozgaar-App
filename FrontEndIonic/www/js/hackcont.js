var app = angular.module("myApp", []); 

 /*app.controller('myController', function ($scope,$http) {
   // var employee={name:"abc",id:"1",img:"empl.png"};
    //$scope.employee=employee;
$http({
        method : 'GET',
        url : "http://localhost/tut.php"
 
    }).then(function (response){
    $scope.abc=response.data;
    
});

 });*/
app.controller('myctrl', function($scope, $http) {
    
    $http.get("http://localhost/tut2.php")
    .then(function (response) {$scope.names = response.data.records;});
    
    
        });





app.controller('myctrl1',function($scope,$http){	
    $scope.insertData=function(){		
    $http.post("http://localhost/store.php", {
		'name':$scope.name,
		'id':$scope.id,
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
    });
        }
         });
    //alert("hello");

//otp
app.controller('myctrl3',function($scope,$http,$window){	
    //func1
    $scope.insertData=function(){		
    $http.post("http://localhost/message/index.php", {
		'number':$scope.number
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
        alert("hi");
    });
        alert("hi");
        
        $window.location.href = 'templates/otp.html';//doubt
        
        }

    
    
    
         });
//auth





app.controller('myctrl4', function($scope, $http) {
     $scope.otp1;
    $scope.getData1=function(){
       
    $http.get("http://localhost/tut3.php")
    .then(function (response) {$scope.names = response.data.records;});
  //  alert(($scope.names[0].otp));
    // var myObj = JSON.parse($scope.names);
    //    var count = Object.keys($scope.names).length;
      //  alert(count);
       // var c=($scope.names[0].otp).toString();
  var d=($scope.otp1).toString();
        var c='5792';
       // var d='dd';
//        var e=$scope.otp1;
       
      for (var i = 0; i < 1; i++) {                   //doubt
           var f=($scope.names[i].otp).toString();
           if(d==f){
          //if(c == $scope.names[i].otp){
               alert("matched");
          }
                //alert(typeof($scope.otp1));
            //alert($scope.names[i].otp);
}
    }
    
        });
