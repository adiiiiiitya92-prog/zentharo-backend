const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    image: { type: String }, // URL to client photo
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
