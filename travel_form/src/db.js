const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const Review = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
});

mongoose.model('Review', Review);
mongoose.connect('mongodb://localhost/travel');
