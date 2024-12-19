const express = require('express')
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot } = require('../../db/models');

const { Op } = require('sequelize');


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//Get all spots
router.get("/", async(req,res) => {
    let spots = [];

    spots = await Spot.findAll();

    res.status(200).json(spots);
})



module.exports = router;
