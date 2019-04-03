const { User } = require('../models');

const user = {
    getUser: function (req, res, id) {
        const token = req.headers['x-auth'];
        let user = await User
            .findOne({token})
            .catch((err) => {
                console.log(err);
            });
        cb.getUserSuccess(res, user, id);
    },
    getUsers: async function (req, res) {
        const token = req.headers['x-auth'];
        let user = await User
            .findOne({ token })
            .catch((err) => {
                console.log(err);
            });
        cb.getUsersSuccess(res, user);
            
    },
    patchUser: async function (req, res, id) {
        const token = req.headers['x-auth'];
        let user = await User
            .findOne({ token })
            .catch((err) => {
                console.log(err);
            });
        cb.patchUserSuccess(req, res, user, id);
    }
}

const cb = {
    getUserSuccess : async function (res, user, id) {
        if (user) {            
                let usr = await User
                    .findById(id)
                    if (!usr) {
                        res
                            .status(400)
                            .send()
                    } else {
                        res.send(usr)
                    }
        } else {
            res
                .status(401)
                .send();
        }
    },
    getUsersSuccess : async function (res, user) {
        if (user) {
            let users = await User.find({})
            res.send({ users })
        } else {
            res.status(401).send();
        }
    },
    patchUserSuccess: async (req, res, user, id) => {
        if (user) {
            let usr = await User
                    .findById(id)
                if (!usr) {
                    res.status(404).send()
                } else {
                    res.send({"message": "Patching user is coming soon"})
                }
        } else {
            res.status(401).send();
        }
    }
}

module.exports = {
    user
}
