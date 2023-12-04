const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    title: {
        type: String
    },
    region: {
        type: String
    },
    shortDescription: {
        type: String
    },

    description: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    }

});

module.exports = mongoose.model('Place', placeSchema);