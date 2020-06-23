const User = require("../models/User")
const Useraddress = require("../models/Useraddress")
const loggedIn = require("../middleware/user")
const {check, validationResult} = require('express-validator');

exports.profile = loggedIn, async (req, res) => {
    res.status(200).json({status: 'success', data: req.user})
}

exports.orders = loggedIn, async (req, res) => {
    const order = await Order.query().where('user_id', req.user.id)
    res.send(200).json({
        status: 'success',
        data: order
    })
}
