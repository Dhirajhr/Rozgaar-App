angular.module('starter.services',[])
.factory('phnum',function(){
  var phn={}
  function set(data){
      phn=data;
  }
  function get(){
      return phn;
  }
    return {
        set: set,
        get: get
    }
});