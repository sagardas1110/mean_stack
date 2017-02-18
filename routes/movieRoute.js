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

var movieSchema = mongoose.Schema
({
    Title:String,
    Year:String,
    Runtime:String,
    Director:String,
    Language:String,
    Poster:String,
    status:String
});

var Movie = mongoose.model('Movie',movieSchema, 'movie');// Theater=variable name____theater= tablename.

router.post('/addmovie', function (req, res)//t and c is for input boxes or they  are reffering for attributes.
{
  var movie = new Movie({
    Title: req.body.Title,
    Year: req.body.Year,    
    Runtime:req.body.Runtime,
    Director:req.body.Director,
    Language:req.body.Language,
    Poster:req.body.Poster,
    status:"false"
  });
  movie.save(function(err,docs){
    console.log('Movie Saved Successfully');
  });
});



router.delete('/deletemovie/:id',function(req, res){
  Movie.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});


router.get('/getmovie', function (req, res) {
    Movie.find({}, function (err, docs) {
    res.json(docs);
    });
});


module.exports = router;
