const Contact = require('../models/Contact');

// @desc    Save contact form submission
// @route   POST /api/contact
// @access  Public
const saveContact = async (req, res) => {
    try {
        const { name, email, phone, business, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            business,
            message,
        });

        res.status(201).json({ success: true, data: contact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get all contacts (Admin)
// @route   GET /api/contact
// @access  Private (Admin) - Todo: Implement Auth
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { saveContact, getContacts };
