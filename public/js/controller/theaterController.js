'use strict'

module.exports = function($scope, $http,$rootScope,$location){
  // $rootScope.data="";

  // $scope.demo="Hello";
  var init = function(){
  $http.get('/theaterapi/gettheater').then(successCallback, errorCallback);
  function successCallback(response)
  {
    $scope.theaterData=response.data;
     console.log(response.data);
  }
  function errorCallback(error)
  {
      console.log(error);
  }
};
init();

$scope.addtheater = function(ob){
  $scope.disabled=true;
  $scope.checked=true;

  $http.post('/theaterapi/addtheater/'+ob.theatername+"/"+ob.theatercity).then(successCallback, errorCallback);
  
  function successCallback(response)
  {
    $scope.disabled=false;

  
  $scope.ob.theatername='';
  $scope.ob.theatercity='';
  window.location.reload();
  
    init();
    alert('saved');
}
function errorCallback(error)
{
    console.log(error);
}
};

$scope.deletetheater = function(theater){
  var x=confirm("Are you sure you want to delete ?");
  if(x){
    $http.delete('/theaterapi/deletetheater/'+theater._id).success(function (response) {
  });
}
// window.location.reload();
  init();
  // alert('removed');
};
};

