'use strict';

const express = require('express');
const getCarByid = require('../controllers/cars/get-car-by-id-controller');
const { getCars } = require('../controllers/cars/get-cars-controller');
const router = express.Router();

router.route('/').get(getCars);
router.route('/:id').get(getCarByid);



module.exports = router;