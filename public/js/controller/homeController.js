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

 $rootScope.loc=function(t,p,d,r)
{
$rootScope.moviename=t;	
$rootScope.poster=p;
$rootScope.director=d;
$rootScope.runtime=r;	
//$rootScope.theater=th;	
//$rootScope.city=c;	
$location.path("/Mdetail");
};



$rootScope.locrate = function(tr,pr)
{
	$rootScope.movie=tr;
	$rootScope.poster=pr;	
	
	$location.path("/Rating");
}
};