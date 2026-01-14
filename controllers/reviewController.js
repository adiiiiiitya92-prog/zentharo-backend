const Review = require('../models/Review');

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ date: -1 });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Add a review
// @route   POST /api/reviews
// @access  Private (Admin)
const addReview = async (req, res) => {
    try {
        const { name, rating, review, image } = req.body;
        if (!name || !rating || !review) {
            return res.status(400).json({ message: 'Please provide name, rating and review text' });
        }
        const newReview = await Review.create({ name, rating, review, image });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private (Admin)
const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });

        await Review.deleteOne({ _id: req.params.id });
        res.json({ message: 'Review removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update a review
// @route   PUT /api/reviews/:id
// @access  Private (Admin)
const updateReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });

        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getReviews, addReview, deleteReview, updateReview };
