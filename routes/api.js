const router = require('express').Router();
const Workouts = require('../model/workouts.js');

router.get('/api/workout', async (req, res) => {
    let workoutData = await Workouts.find({}).sort({_id: -1}).limit(1)
    res.send(workoutData);
})

router.post('/', async (req, res) => {
    let data = {
        ...req.body,
    }
})



module.exports = router;