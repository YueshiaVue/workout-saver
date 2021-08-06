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
  
// router.put('/api/workouts/:id', async (req, res) => {
//     // TODO: need to be fixed. Update is not updating correct data.
//     let exercises = req.body;
//     let id = req.params.id
//     if(id !== 'undefined') {
//         console.log('id ****',id);
//         let recentWorkout = Workouts.findById(id);
//         console.log('recentworkout',recentWorkout);
//         // let updatedExercises = recentWorkout.exercises.map(data => {
//         //     if (id === data.id) {
//         //         return {...exercises}
//         //     }
//         //     return {data};
//         // });

//         // let updateData = {
//         //     day: new Date().toString(),
//         //     exercises: updatedExercises,
//         //   }
//         //   console.log('exerciseData',exercises);
//         // let data = await Workouts.findByIdAndUpdate(id,updateData)
//         // console.log('update data from mongo: ',data);
//         // res.send(data);
//     }
// })

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
// router.post('/api/workouts', async (req, res) => {
//     //add workout
//     let data = req.body;
//     let id = req.params.id;
//     console.log('data add ***',data);
//     console.log('id *****', id)
//     if (id !== 'undefined') {
//         let recentWorkout = Workouts.findById(id);
//         recentWorkout.exercises = [...recentWorkout.exercises,data];
//         if( Object.keys(data).length !== 0 && data.constructor === Object) {
//             console.log(data);
//             // let addData = await Workouts.insertMany([data]);
//             let data = await Workouts.findByIdAndUpdate(id,updateData)
//             console.log('addDATA ***',addData);
//             // res.send(addData);
//         }
//     }
// })

// router.get('/api/workouts/range', async (req, res) => {
//     //get workout
// })

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