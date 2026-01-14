const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    image: { type: String }, // URL to service image
});

module.exports = mongoose.model('Service', serviceSchema);
