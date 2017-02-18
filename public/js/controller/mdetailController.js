
module.exports = function($scope, $http,$rootScope,$location)
{
//  $scope.movieData="";
  $rootScope.data="";

var init = function(){
$http.get('	http://localhost:7000/mappingapi/getmapping').then(successCallback, errorCallback);
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


 



$scope.movdates=[];
var showdate = function()
{
  for(var i=0; i < 4; i++)
  {
    var date = new Date();
    date.setDate(date.getDate() + i);
    $scope.movdates[i]=date;
  }
};
showdate();



$rootScope.lock=function(md,tc,tn,tt)
{
  $rootScope.dd=md;
  $rootScope.thc=tc;
 $rootScope.thn=tn;
$rootScope.tm=tt;
$location.path("/Seat");
};

};