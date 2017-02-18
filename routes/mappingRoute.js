var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/crud');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

 var mappingSchema = mongoose.Schema
({
    Date:String,
    Title:String,
    theatername:String,
    theatercity:String,
    Time:String,
    Director:String,
    Runtime:String,
    Poster:String
});

var Mapping = mongoose.model('Mapping',mappingSchema, 'mapping');// Theater=variable name____theater= tablename.

router.post('/addmapping', function (req, res)//t and c is for input boxes or they  are reffering for attributes.
{
  var mapping = new Mapping({
    Date :req.body.Date,
    Title :req.body.Title,
    theatername :req.body.theatername,
    theatercity :req.body.theatercity,
    Time :req.body.Time,
    Director:req.body.Director,
    Runtime:req.body.Runtime,
    Poster:req.body.Poster
   });
  mapping.save(function(err,docs){
    console.log('Movie Saved Successfully');
  });
});



router.delete('/deletemapping/:id',function(req, res){
  Mapping.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});


router.get('/getmapping', function (req, res) {
    Mapping.find({}, function (err, docs) {
    res.json(docs);
    });
});


module.exports = router;
