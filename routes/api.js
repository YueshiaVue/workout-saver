const router = require('express').Router();
const Workouts = require('../model/workouts.js');

router.get('/api/workout', async (req, res) => {
    let workoutData = await Workouts.find({}).sort({_id: -1}).limit(1)
    res.send(workoutData);
})

router.put('/api/workouts/:id', async (req, res) => {
    let exerciseData = req.body
    let id = req.params.id
    console.log('exerciseData',exerciseData);
    let data = await Workouts.findByIdAndUpdate(id,exerciseData)
    console.log('update data from mongo: ',data);

    res.send(data);
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