const { mongoose } = require('./db');

var RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    },
    location: {
        type : String,
        required : true
    },
    discount: {
        type : Number,
        required : false
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
})

var Restaurunt = mongoose.model('Restraunts', RestaurantSchema);
module.exports = { Restaurunt }