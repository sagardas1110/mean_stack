var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/crud');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

var theaterSchema = mongoose.Schema({
  theatername: String,
  theatercity: String
});

var Theater = mongoose.model('Theater',theaterSchema, 'theater');// Theater=variable name____theater= tablename.

router.post('/addtheater/:t/:c', function (req, res)//t and c is for input boxes or they  are reffering for attributes.
{
  var theater = new Theater({
    theatername: req.params.t,
    theatercity: req.params.c
  });
  theater.save(function(err,docs){
    console.log('Theater Saved Successfully');
  });
});

router.delete('/deletetheater/:id',function(req, res){
  Theater.remove({_id:req.params.id},function(err, docs){
    console.log('Theater Removed Successfully');
  });
});

router.get('/gettheater', function (req, res) {
    Theater.find({}, function (err, docs) {
    res.json(docs);
    });
});


module.exports = router;
