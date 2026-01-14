const express = require('express');
const router = express.Router();
const { getServices, addService, deleteService, updateService } = require('../controllers/serviceController');

router.route('/')
    .get(getServices)
    .post(addService);

router.route('/:id')
    .delete(deleteService)
    .put(updateService);

module.exports = router;
