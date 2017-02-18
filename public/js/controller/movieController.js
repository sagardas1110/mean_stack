module.exports = function($scope, $http,$rootScope,$location)
{
//  $scope.movieData="";
  $rootScope.data="";

var init = function(){
$http.get('/movieapi/getmovie').then(successCallback, errorCallback);
function successCallback(response)
{
  $scope.movieDataa=response.data;
  // console.log(response.data);
}
function errorCallback(error)
{
    // console.log(error);
}
};
init();


$scope.searchMovie = function(){
  $scope.disabled=false;
  $scope.checked=true;
  
$http.get('http://www.omdbapi.com/?t='+$scope.Title+'&y='+$scope.Year+'&plot=short&r=json').then(successCallback, errorCallback);

function successCallback(response)
{
    $scope.movieData=response;
    //$rootScope.data=response;
    // console.log(response);
    if($scope.movieData.length==0)
    {
    alert('ERROR : No movie found .');
    console.log('ERROR : No movie found .');
    }
    else{
      alert('movie found');
    }
}
function errorCallback(error){
    console.log(error);
}
};




$scope.addmovie = function(){
  if($scope.movieData.data)
  {
  $http.post('/movieapi/addmovie/',$scope.movieData.data).then(successCallback, errorCallback);
  function successCallback(response)
  {
  init();
  $scope.movieData='';

  // window.location.reload();
  // init();
    alert('saved');
}
function errorCallback(error)
{
    console.log(error);
}
}
};


$scope.deletemovie = function(movie){
  var x=confirm("Are you sure you want to delete ?");
  if(x){
    $http.delete('/movieapi/deletemovie/'+movie._id).success(function (response) {
  });
}
 // window.location.reload();
  init();
  // alert('removed');
};
};