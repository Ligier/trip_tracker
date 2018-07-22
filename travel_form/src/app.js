const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
require('./db');
const Review = mongoose.model('Review');

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/home', function(req, res) {
  Review.find(function(err, reviews) {
    console.log(reviews);
  });
  res.render('homepage');
});

app.get('/london', function(req, res) {
  res.render('trip_page');
});

app.post('/home', function(req, res) {
  const newReview = new Review({
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
  });
  newReview.save((err, result) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/home');
});

app.listen(3000);
console.log('Started server on port 3000');
