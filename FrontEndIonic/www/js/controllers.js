angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('JoblistsCtrl', function($window,$scope,prof,fieldService,$http,phnum) {
 /* $scope.playlists = [
    { title: 'Worker 1', id: 1 },
    { title: 'Worker 2', id: 2 },
    { title: 'Worker 3', id: 3 },
    { title: 'Worker 4', id: 4 },
    { title: 'Worker 5', id: 5 },
    { title: 'Worker 6', id: 6 }
  ];*/
    
//post
    //$scope.profileX=[];
    $scope.doIt = function(name){
        $http.post("http://192.168.43.47/profile2.php", {
        'name':name
		})
        .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");        
    });
    
        $http.get("http://192.168.43.47/profile2.php")
    .then(function (response) {$scope.profileX = response.data.records;});
    
        prof.set($scope.profileX);
        $window.location.href="#/app/joblist";
    }
    
   // alert(fieldService.get());
    $http.post("http://192.168.43.47/playlist2.php", {
        'field':fieldService.get()
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");        
    });
    
    
    
    //post
    
    $http.get("http://192.168.43.47/playlist2.php")
    .then(function (response) {$scope.joblists = response.data.records;});
    
    
})



.controller('PlaylistsCtrl', function($window,$scope,prof,fieldService,$http,phnum) {
 /* $scope.playlists = [
    { title: 'Worker 1', id: 1 },
    { title: 'Worker 2', id: 2 },
    { title: 'Worker 3', id: 3 },
    { title: 'Worker 4', id: 4 },
    { title: 'Worker 5', id: 5 },
    { title: 'Worker 6', id: 6 }
  ];*/
    
//post
    //$scope.profileX=[];
    $scope.doIt = function(name){
        $http.post("http://127.0.0.1/profile.php", {
        'name':name
		})
        .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");        
    });
    
        $http.get("http://127.0.0.1/profile.php")
    .then(function (response) {$scope.profileX = response.data.records;});
    
        prof.set($scope.profileX);
        $window.location.href="#/app/playlist";
    }
    
   // alert(fieldService.get());
    $http.post("http://127.0.0.1/playlists.php", {
        'field':fieldService.get()
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");        
    });
    
    
    
    //post
    
    $http.get("http://127.0.0.1/playlists.php")
    .then(function (response) {$scope.playlists = response.data.records;});
    
    
})



.controller("category",function($scope,$window,workhire) {
	$scope.goForWork = function(){
        
		/*$scope.state_work = "You have chosen to Work !";
		$scope.state_hire = "";*/
        workhire.set(0);
        $window.location.href = '#/app/choose';
	}
	$scope.goForHire = function(){
		/*$scope.state_hire = "You have chosen to Hire !";
		$scope.state_work = "";*/
         workhire.set(1);
         $window.location.href = '#/app/choose';//doubt
	}

	
})



.controller("ExampleController", function($scope,fieldService,$window,workhire,$http,phnum) {
 
    $scope.images = [];
    $scope.image_text_col = [];
    $scope.loadImages = function() {
        for(var i = 0; i < 12; i++) {
            $scope.images.push({id: i, src: "img/"+(i+1)+".png"});
            
        }
        $scope.image_text_col[0]="Mechanic";        
        $scope.image_text_col[1]="Electrician";
        $scope.image_text_col[2]="Cook";
        $scope.image_text_col[3]="Secutiry Guard";
        $scope.image_text_col[4]="Gardener";
        $scope.image_text_col[5]="Plumber";
        $scope.image_text_col[6]="Road Worker";
        $scope.image_text_col[7]="Typist";
        $scope.image_text_col[8]="Customer Care";
        $scope.image_text_col[9]="Stuntman";
        $scope.image_text_col[10]="Catering";
        $scope.image_text_col[11]="Labour";
    }
    $scope.thisIsSelected = function($index) {
        //if($index == 0)
                fieldService.set($scope.image_text_col[$index]);
        //else if()
        //doubt
        //$scope.images[$index].src="img/ionic.png"
        if(workhire.get()==0){
            //alert("Hell");    
            $http.post("http://192.168.43.47/work.php", {
		'phnum':phnum.get(),
        'field':fieldService.get()
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");        
    });
            $window.location.href = '#/app/joblists';
        }else{
            $window.location.href = '#/app/browse';
        }
    } 
})



.controller('StateCtrl', function($scope) {

})
.controller('PlaylistCtrl', function($scope, $stateParams,prof) {
    
    $scope.x = prof.get();
   $scope.callthis = function(){
       $scope.db_name = $scope.x['name'];
       $scope.db_email = $scope.x['email'];
       $scope.db_state = $scope.x['state'];
       $scope.db_city = $scope.x['city'];
   }
    
})


.controller('JoblistCtrl', function($scope, $stateParams,prof,job) {
    
    $scope.x = job.get();
   $scope.callthis = function(){
       $scope.db_name = $scope.x['title'];
       $scope.db_vacancy = $scope.x['vacancy'];
       $scope.db_city = $scope.x['city'];
       $scope.db_lastdate = $scope.x['lastdate'];
       $scope.db_budget = $scope.x['budget'];
       $scope.db_field = $scope.x['field'];
       $scope.db_duration = $scope.x['duration'];
       $scope.db_address = $scope.x['address'];
   }
    
})


.controller('myctrl3',function($scope,$http,$window,phnum){
   // $rootScope.hideit = true;
    $scope.hi='asdads';
    //func1
    $scope.insertData=function(){
        //console.log('hi');
        //alert('hi');
    $http.post("http://192.168.43.47/message/index.php", {
		'number':$scope.number
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
       // alert("hi");
        
    });
        phnum.set($scope.number);
        //alert("hi");
          $scope.modal.hide();
        $window.location.href = '#/app/otp';//doubt
        
        }
    
         })
.controller('myctrl4', function($scope, $http, $window) {
     $scope.otp1;
    $scope.getData1=function(){
       
    $http.get("http://192.168.43.47/tut3.php")
    .then(function (response) {$scope.names = response.data.records;});
  //  alert(($scope.names[0].otp));
    // var myObj = JSON.parse($scope.names);
    //    var count = Object.keys($scope.names).length;
      //  alert(count);
       // var c=($scope.names[0].otp).toString();
  var d=($scope.otp1).toString();
        //var c='5792';
       // var d='dd';
//        var e=$scope.otp1;
       
      for (var i = 0; i < 1; i++) {                   //doubt
           var f=($scope.names[i].otp).toString();
           if(d==f){
          //if(c == $scope.names[i].otp){
             //  alert("matched");
               $window.location.href = '#/app/search';//dou 
          }
                //alert(typeof($scope.otp1));
            //alert($scope.names[i].otp);
}
       
    }
    
        })

.controller('SignupController',function($scope,$http,$window,phnum){	
    
    //a
    
      $scope.statelist = [
    { title: 'Andaman and Nicobar Islands', id: 1 },
    { title: 'Andhra Pradesh', id: 2 },
    { title: 'Arunachal Pradesh', id: 3 },
    { title: 'Assam', id: 4 },
    { title: 'Bihar', id: 5 },
	{ title: 'Chandigarh', id: 5 },
	{ title: 'Chhattisgarh', id: 5 },
	{ title: 'Dadra and Nagar Haveli', id: 5 },
	{ title: 'Daman and Diu', id: 5 },
	{ title: 'Delhi', id: 5 },
	{ title: 'Goa', id: 5 },
	{ title: 'Gujarat', id: 5 },
	{ title: 'Haryana', id: 5 },
	{ title: 'Himachal Pradesh', id: 5 },
	{ title: 'Jammu and Kashmir', id: 5 },
	{ title: 'Jharkhand', id: 5 },
	{ title: 'Karnataka', id: 5 },
	{ title: 'Kerala', id: 5 },
	{ title: 'Lakshadweep', id: 5 },
	{ title: 'Madhya Pradesh', id: 5 },
	{ title: 'Maharashtra', id: 5 },
	{ title: 'Manipur', id: 5 },
	{ title: 'Meghalaya', id: 5 },
	{ title: 'Mizoram', id: 5 },
	{ title: 'Nagaland', id: 5 },
	{ title: 'Odisha', id: 5 },
	{ title: 'Puducherry', id: 5 },
	{ title: 'Punjab', id: 5 },
	{ title: 'Rajasthan', id: 5 },
	{ title: 'Sikkim', id: 5 },
	{ title: 'Tamil Nadu', id: 5 },
	{ title: 'Telangana', id: 5 },
	{ title: 'Tripura', id: 5 },
	{ title: 'Uttar Pradesh', id: 5 },
	{ title: 'Uttarakhand', id: 5 },
	{ title: 'West Bengal', id: 5 }
  ];
    $scope.cityList=[{title: 'Amritsar'},{title: 'Abohar'},{title: 'Barnala'},{title: 'Chandigarh'}];
    
    //a
    
    $scope.insertData=function(){		
        
    $http.post("http://192.168.43.47/signup.php", {
        'phnum':phnum.get(),
		'name':$scope.fname + ' ' + $scope.lname,
		'email':$scope.email,
        'state':$scope.state,
        'city':$scope.city
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
        
    });
        
         $window.location.href = '#/app/category';//doubt
        }
         })


.controller('jobctrl',function($scope,$http,$window,fieldService,phnum){
    //$scope.hi='asdads';
    //func1
    $scope.field='qwe';
    $scope.init=function(){
        $scope.field=fieldService.get();
    };
    $scope.cityList=[{title: 'Amritsar'},{title: 'Abohar'},{title: 'Barnala'},{title: 'Chandigarh'}];
    $scope.insertData=function(){
        //console.log('hi');
        //alert('hi');
    $http.post("http://192.168.43.47/job.php", {
		'phnum':phnum.get(),
        'title':$scope.title,
        'field':fieldService.get(),
        'budget':$scope.budget,
        'duration':$scope.duration,
        'lastdate':$scope.lastdate,
        'vacancy':$scope.vacancy,
        'city':$scope.city,
        'address':$scope.address
		})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
       // alert("hi");
        
    });
        //phnum.set($scope.number);
        //alert("hi");
          //$scope.modal.hide();
        $window.location.href = '#/app/playlists';//doubt
        
    }
    
    //init();
         });
//auth
