const router = require('express').Router();
const Workouts = require('../model/workouts.js');

router.get('/api/workout', async (req, res) => {
    let workoutData = await Workouts.find({}).sort({_id: -1}).limit(1)
    res.send(workoutData);
})

router.get('/api/exercise', async (req, res) => {
    let exerciseData = await Workouts.find({}).sort({_id: -1}).limit(1)
    res.send(exerciseData);
})

router.get('/api/stats', async (req, res) => {
    let statsData = await Workouts.find({}).sort({_id: -1}).limit(1)
    res.send(statsData);
})

router.post('/', async (req, res) => {
    let data = {
        ...req.body,
    }
})



module.exports = router;