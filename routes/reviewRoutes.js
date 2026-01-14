const express = require('express');
const router = express.Router();
const { getReviews, addReview, deleteReview, updateReview } = require('../controllers/reviewController');

router.route('/')
    .get(getReviews)
    .post(addReview);

router.route('/:id')
    .delete(deleteReview)
    .put(updateReview);

module.exports = router;
