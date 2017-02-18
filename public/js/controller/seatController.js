module.exports = function($scope, $http,$rootScope,$location)
{
  
  var hello123 = function()
{
  var ti=  $rootScope.moviename ;
  var ci= $rootScope.thc;
  var th=  $rootScope.thn;
  var ts=  $rootScope.tm;


  $http.get('/bookingapi/blocking/'+ti+'/'+ci+'/'+th+'/'+ts).then(successCallback, errorCallback);
  function successCallback(response)
  {
    $scope.bookedData=response.data;

    console.log(response);
    
    for(var i=0;i<response.data.length;i++)
    {
      for(var j=0;j<response.data[i].SeatNumber.length;j++)
      {
        //console.log(response[i].SeatNo);
        //console.log(response[i].SeatNo.length);

$('#'+response.data[i].SeatNumber[j]).attr('src','img/r_chair.png');

      }
    }
  }
  function errorCallback(error)
  {
      // console.log(error);
  }
  };
    hello123();

$(function(){
  var count=0;
  var sn="";
  var seats=[];
  var amount=0;

  
   $(".image").on('click', function() {

      var id = $(this).attr('id');
      var path = $('#'+id).attr('src');
      var x=path.substring(path.lastIndexOf('bb_chair'),path.length);
      var y=path.substring(path.lastIndexOf('g_chair'),path.length);

      if ( x == "bb_chair.png") 
    {

      $('#'+id).attr('src','img/g_chair.png');

      count++;
      seats.push(id);


      $rootScope.seat_n=JSON.stringify(seats);
      document.getElementById("select").innerHTML=seats;
    }


    else if (y== "g_chair.png")
    {
      $('#'+id).attr('src','img/bb_chair.png');

           if(!count==0)
           {
           var ind = seats.indexOf(id);
           seats.splice(ind,1);
           count--;
    }
    } 
    
    // $(this).toggleClass("img/b_chair.png");
      amount=count*250;
      document.getElementById("select").innerHTML = seats;
      document.getElementById("amt").innerHTML = amount;
      document.getElementById("tot").innerHTML = count;

  });
});


 $rootScope.loc1=function()
{
  $rootScope.sn= document.getElementById("select").innerHTML;
  $rootScope.am= document.getElementById("amt").innerHTML;
  $rootScope.tl= document.getElementById("tot").innerHTML;

$location.path("/Pay");
};
};