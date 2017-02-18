module.exports = function($scope, $http,$rootScope,$location)
{
//  $scope.movieData="";
  // $rootScope.data="";



$rootScope.addbooking=function()
{
$rootScope.Cname=document.getElementById("NameOnCard").value;
$rootScope.Cnum=document.getElementById("Mobile").value;
$rootScope.Cid=document.getElementById("Email").value;

var Mn=$rootScope.moviename;
var Tc=$rootScope.thc;
var Tn=$rootScope.thn;
var Mt=$rootScope.tm;
var Md=$rootScope.dd;
var Ts=$rootScope.tl;
var At=$rootScope.am;
var Cn=$rootScope.Cname;
var Em=$rootScope.Cid;
var Mb=$rootScope.Cnum;
var Sn=$rootScope.seat_n;

  $http.post('/bookingapi/addbooking/'+Mn+"/"+Tc+"/"+Tn+"/"+Mt+"/"+Md+"/"+Ts+"/"+At+"/"+Cn+"/"+Em+"/"+Mb+"/"+Sn).then(successCallback, errorCallback);
{
	function successCallback(response){}
function errorCallback(error){}
};

$location.path("/Ticket");

};
};