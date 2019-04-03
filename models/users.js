const { mongoose } = require('./db');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    },
    userType: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    phn : {
        type: String,
        required: true
    },
    userName : {
        type : String,
        minlength: 10,
        required: true
    }
})

UserSchema.methods.findUser = async function (token) {
    let users;
    try {
        users = await this.find({ token }).catch((err) => { console.log( err) });
        if (users) {
            const user = users.next();
            return user;
        }
    } catch (err) {
        process.logger(undefined, err);
    }
}

var User = mongoose.model('Users', UserSchema);
module.exports = { User }