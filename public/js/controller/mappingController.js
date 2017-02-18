module.exports = function($scope, $http,$rootScope,$location)
{
//  $scope.movieData="";
  // $rootScope.data="";

var init=function()
{
$http.get('/mappingapi/getmapping').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.mappingdata=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}
};
init();


var movietm = function()
{
$http.get('http://localhost:7000/movieapi/getmovie').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.moviedetails=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}
};
movietm();


var theatertm=function(){
$http.get('http://localhost:7000/theaterapi/gettheater').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.theaterdetails=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}
};
theatertm();



$scope.addmapping = function()
  {
    $scope.mapping.Date=$('#datepicker').val();
  $http.post('/mappingapi/addmapping',$scope.mapping).then(successCallback, errorCallback);
  function successCallback(response)
  {
  init();
  $scope.mappingdata='';

  window.location.reload();
  init();
    alert('saved');
}
function errorCallback(error)
{
    console.log(error);
}
location.reload();
};


$scope.deletemapping = function(mappingdata){
  var x=confirm("Are you sure you want to delete ?");
  if(x){
    $http.delete('/mappingapi/deletemapping/'+mappingdata._id).success(function (response) {
  });
}
 window.location.reload();
  init();
  alert('removed');
};
};
