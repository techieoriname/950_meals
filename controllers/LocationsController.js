const Location = require("../models/Location")
const {check, validationResult} = require('express-validator');

exports.active = async (req, res) => {
    const location = await Location.query();
    res.status(200).json({status: 'success', data: location})
}

exports.create = async (req,res) => {
    try {
        const rechk = await Location.query().findOne({city: req.body.city, zipcode: req.body.zipcode});
        if(rechk) {
            res.status(422).json({
                status: 'failed',
                errors: "Location already exist",
            });
        } else {
            await Location.query().insert({
                country: req.body.country,
                state: req.body.state,
                city: req.body.city,
                zipcode: req.body.zipcode,
                is_active: req.body.is_active
            });
            res.status(200).json({
                status: 'success',
                msg: 'Location added successfully'
            })
        }
    } catch(e) {
        console.log(e)
        res.status(422).json({
            status: 'failed',
            errors: e,
        });
    }
}