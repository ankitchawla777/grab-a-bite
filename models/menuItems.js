const { mongoose } = require('./db');

var MenuItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    },
    price: {
        type : String,
        required : true
    },
    isVeg: {
        type : Bool,
        required : true,
        default : false
    },
    category : {
        type : String,
        required : false
    },
    restaurant : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurants',
        required: true
    }
})

var MenuItem = mongoose.model('MenuItems', MenuItemsSchema);
module.exports = { MenuItem }