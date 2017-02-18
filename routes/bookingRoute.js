var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/crud'); //crud is my database name...
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

var bookingSchema = mongoose.Schema({

            MovieName:String,
            TheaterCity:String,
            TheaterName:String,
            MovieTime:String,
            MovieDate:String,
            TotalSeats: String,
            Amount: String,
            CustomerName: String,
            Email: String,
            Mobile: String,
            SeatNumber: Array

  });

var Booking = mongoose.model('Booking',bookingSchema, 'booking');

router.post('/addbooking/:Mn/:Tc/:Tn/:Mt/:Md/:Ts/:At/:Cn/:Em/:Mb/:Sn', function (req, res)//    /:Tc/:Tn/:Mt/:Md/:Sn/:Ts/:At/:Cn/:Em/:Mb
{
  var booking = new Booking({
    MovieName: req.params.Mn,
    TheaterCity: req.params.Tc,
    TheaterName: req.params.Tn,
    MovieTime: req.params.Mt,
    MovieDate: req.params.Md,
    TotalSeats: req.params.Ts,
    Amount: req.params.At,
    CustomerName: req.params.Cn,
    Email: req.params.Em,
    Mobile: req.params.Mb,
    SeatNumber:JSON.parse(req.params.Sn)
  });
  booking.save(function(err,docs){
    console.log('Booking Successfully');
  });


});
router.get('/blocking/:ti/:ci/:th/:ts', function (req, res) {

    Booking.find({
      MovieName:req.params.ti,
      TheaterCity:req.params.ci,
      TheaterName:req.params.th,
      MovieTime:req.params.ts
      }, function (err, docs) {
         res.json(docs);

    });

});
module.exports = router;