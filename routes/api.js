const router = require('express').Router();
const Workouts = require('../model/workouts.js');

router.get('/api/workout', async (req, res) => {
    let workoutData = await Workouts.find({}).sort({_id: -1}).limit(1)
    res.send(workoutData);
})

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workouts.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

router.get('/api/stats', async (req, res) => {
    let statsData = await Workouts.find({}).sort({_id: -1}).limit(1)
    res.send(statsData);
})

router.post('/api/workouts', ({body}, res) => {
    Workouts.create({ })
      .then((dbWorkout) => {
          console.log('line 57: dbworking *****',dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

router.get('/api/workouts/range', (req, res) => {
    Workouts.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7)
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = router;