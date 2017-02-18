'use strict'

var app = require('angular').module('merafilm');


app.controller('HomeController',require('./homeController'));

app.controller('TheaterController',require('./theaterController'));

app.controller('MovieController',require('./movieController'));

app.controller('MappingController',require('./mappingController'));

app.controller('MdetailController',require('./mdetailController'));

app.controller('SeatController',require('./seatController'));

app.controller('PayController',require('./payController'));

app.controller('TicketController',require('./ticketController'));

app.controller('RatingController',require('./ratingController'));

app.controller('LoginController', require('./loginController'));

app.controller('LogoutController', require('./logoutController'));

app.controller('RegisterController', require('./registerController'));
