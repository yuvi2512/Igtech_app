const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  image: { type: String, required: true },
  stars: { type: Number, required: true, min: 0, max: 5 },
  title: { type: String, required: true },
  studentsWatched: { type: Number, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);
