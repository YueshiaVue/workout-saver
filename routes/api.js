const router = require('express').Router();
const Workout = require('../model/workouts.js');

router.post('/', async (req, res) => {
    let data = {
        ...req.body,
    }
})

module.exports = router;