const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
      },
      type: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: Number,
      sets: Number,
      reps: Number,
      distance: Number,
    },
  ],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
