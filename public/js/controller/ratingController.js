module.exports = function($scope, $http,$rootScope,$location)
{


var rate = function()
{
  var ti=  $rootScope.movie;
  
  $http.get('/ratingapi/showrating/'+ti).then(successCallback, errorCallback);
  function successCallback(response)
  {
    $scope.ratingData=response.data;
  }
  function errorCallback(error)
  {
      console.log(error);
  }
};
rate();


$scope.addrating = function(){

  $rootScope.com=document.getElementById("comment").value;
  $rootScope.cn=document.getElementById("cname").value; 
  var e = document.getElementById("ddlViewBy");
  $rootScope.rate = e.options[e.selectedIndex].value;


  var s1= $rootScope.cn;
  var s2= $rootScope.com;
  var s3= $rootScope.movie;
  var s4= $rootScope.rate;
  
  // var s5= $rootScope.img;
 
  $http.post('/ratingapi/addrating/'+s1+"/"+s2+"/"+s3+"/"+s4).then(successCallback, errorCallback);
  function successCallback(response)
  {
      // rate();
  
// refresh();
 // window.location.reload();
  rate(); 
 
    alert('saved');
}
function errorCallback(error)
{
    console.log(error);
}
};
};