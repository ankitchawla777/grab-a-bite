'use strict'

require('../../config/config');
const {mongoose} = require('mongoose');
mongoose.promise = require('bluebird');

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true})

module.exports = {
    mongoose
}

