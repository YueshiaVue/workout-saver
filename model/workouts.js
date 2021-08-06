const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
.then(x => {
  console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
  );
})
.catch(err => {
  console.error('Error connecting to mongo', err);
});

;
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter an exercise name',
      },
      duration: {
        type: Number,
        required: 'Enter an exercise duration by the closest minute(s)',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workouts = mongoose.model('workout', workoutsSchema);

module.exports = Workouts;