const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    identifier: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true 
});

module.exports = mongoose.model('Product', ProductSchema);
